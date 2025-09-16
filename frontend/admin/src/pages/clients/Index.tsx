import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Table from '@/components/ui/Table';
import TableFilter from './components/TableFilter';
import DeleteButton from '@/components/ui/DeleteButton';
import { useNavigate } from 'react-router-dom';
import { useGetClientsQuery } from '@/store/slices/ClientSlice';
import ViewButton from '@/components/ui/ViewButton';


const Clients: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({
        search: '',
        status: '',
    });
    const navigate = useNavigate();

    const { data, isLoading, isError, refetch } = useGetClientsQuery({
        page,
        limit,
        search: filters.search,
        status: filters.status,
    });

    const clients = data?.items.map((client) => ({
        id: client._id,
        name: client.name,
        email: client.email,
        role: client.role,
        status: client.status,
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
            header: "Status",
            accessor: (client) => (
                <span className={`px-2 py-1 rounded-full text-xs ${client.status === "ACTIVE"
                    ? "bg-green-300 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                    : "bg-red-300 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                    }`}>
                    {client.status}
                </span>
            ),
        },
        {
            header: 'Actions',
            accessor: (client) => (
                <div className="flex items-center space-x-2">
                    <ViewButton
                        title={`View ${client.name}`}
                        onClick={() => navigate(`/users/clients/${client.id}`)}
                    />
                    <DeleteButton
                        title={`Delete ${client.name}`}
                        onClick={() => {

                        }}
                    />
                </div>
            ),
        },
    ];



    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'Clients', path: '' }
    ];

    return (
        <PageLayout
            title="Manage Clients"
            breadcrumbs={breadcrumbs}
        >
            <TableFilter
                onFilterChange={setFilters}
            />
            {isLoading ? (
                <div className="text-center py-10 text-gray-500">Loading clients...</div>
            ) : isError ? (
                <div className="text-center py-10 text-red-500">Error loading clients. </div>
            ) : (

                <Table
                    columns={columns}
                    data={clients}
                    itemsPerPage={10}
                    sortable={true}
                    currentPage={page}
                    totalEntries={data?.total}
                    onPageChange={(newPage) => setPage(newPage)}
                    onItemsPerPageChange={(newLimit) => {
                        setLimit(newLimit);
                        setPage(1);
                    }}
                />
            )}
        </PageLayout>
    );
};

export default Clients
