import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/layout/admin/PageLayout';
import { useGetUsersQuery } from '@/store/slices/userSlice';
import Table from '@/components/ui/Table';
import TableFilter from './components/TableFilter';
import EditButton from '@/components/ui/EditButton';
import DeleteButton from '@/components/ui/DeleteButton';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Roles } from '@/types/roles';
const Users = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({
        search: '',
        status: '',
        role: ''
    });
    const navigate = useNavigate();
    const { data, isLoading, isError, refetch } = useGetUsersQuery({
        page,
        limit,
        search: filters.search,
        status: filters.status,
        role: filters.role
    });
    const users = data?.items.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
    })) || [];
    const columns = [
        {
            header: 'Name',
            accessor: 'name',
        },
        {
            header: 'Email',
            accessor: 'email',
        },
        {
            header: 'Role',
            accessor: 'role',
        },
        {
            header: "Status",
            accessor: (user) => (_jsx("span", { className: `px-2 py-1 rounded-full text-xs ${user.status === "ACTIVE"
                    ? "bg-green-300 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                    : "bg-red-300 text-red-700 dark:bg-red-900/50 dark:text-red-300"}`, children: user.status })),
        },
        {
            header: 'Actions',
            accessor: (user) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(EditButton, { title: `Edit ${user.name}`, onClick: () => {
                        } }), _jsx(DeleteButton, { title: `Delete ${user.name}`, onClick: () => {
                        } })] })),
        },
    ];
    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'All Users', path: '' }
    ];
    return (_jsxs(PageLayout, { title: "Manage Users", breadcrumbs: breadcrumbs, children: [_jsx("div", { className: "flex justify-end items-start", children: _jsx(Button, { onClick: () => navigate('/users/create'), leftIcon: _jsx(PlusIcon, { className: "w-4 h-4" }), children: "Add New" }) }), _jsx(TableFilter, { roles: Roles, onFilterChange: setFilters }), isLoading ? (_jsx("div", { className: "text-center py-10 text-gray-500", children: "Loading users..." })) : isError ? (_jsx("div", { className: "text-center py-10 text-red-500", children: "Error loading users. " })) : (_jsx(Table, { columns: columns, data: users, itemsPerPage: 10, sortable: true, currentPage: page, totalEntries: data?.total, onPageChange: (newPage) => setPage(newPage), onItemsPerPageChange: (newLimit) => {
                    setLimit(newLimit);
                    setPage(1);
                } }))] }));
};
export default Users;
