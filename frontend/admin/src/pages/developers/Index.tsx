import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Table from '@/components/ui/Table';
import TableFilter from './components/TableFilter';
import DeleteButton from '@/components/ui/DeleteButton';
import { useNavigate } from 'react-router-dom';
import { useGetDevelopersQuery } from '@/store/slices/DeveloperSlice';
import ViewButton from '@/components/ui/ViewButton';


const Developers: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({
        search: '',
        status: '',
    });
    const navigate = useNavigate();

    const { data, isLoading, isError, refetch } = useGetDevelopersQuery({
        page,
        limit,
        search: filters.search,
        status: filters.status,
    });

    const Developers = data?.items.map((developer) => ({
        id: developer._id,
        name: developer.name,
        email: developer.email,
        role: developer.role,
        status: developer.status,
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
            accessor: (developer) => (
                <span className={`px-2 py-1 rounded-full text-xs ${developer.status === "ACTIVE"
                    ? "bg-green-300 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                    : "bg-red-300 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                    }`}>
                    {developer.status}
                </span>
            ),
        },
        {
            header: 'Actions',
            accessor: (developer) => (
                <div className="flex items-center space-x-2">
                    <ViewButton
                        title={`View ${developer.name}`}
                        onClick={() => navigate(`/users/Developers/${developer.id}`)}
                    />
                    <DeleteButton
                        title={`Delete ${developer.name}`}
                        onClick={() => {

                        }}
                    />
                </div>
            ),
        },
    ];



    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'Developers', path: '' }
    ];

    return (
        <PageLayout
            title="Manage Developers"
            breadcrumbs={breadcrumbs}
        >
            <TableFilter
                onFilterChange={setFilters}
            />
            {isLoading ? (
                <div className="text-center py-10 text-gray-500">Loading Developers...</div>
            ) : isError ? (
                <div className="text-center py-10 text-red-500">Error loading Developers. </div>
            ) : (

                <Table
                    columns={columns}
                    data={Developers}
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

export default Developers
