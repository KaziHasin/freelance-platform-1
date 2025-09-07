import React, { useState, useMemo } from 'react';
import {
    PlusIcon as AddIcon,
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/layout/PageLayout';
import { useGetRolesQuery } from '@/store/slices/RoleSlice';
import Table from '@/components/ui/Table';
import { Column } from '@/types/tableColumn';


const Roles: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const { data, isLoading, isError, refetch } = useGetRolesQuery({ page, limit });

    interface Role {
        id: number;
        name: string;
        priority: number;
    }

    const columns: Column<Role>[] = [

        {
            header: 'Name',
            accessor: 'name',
        },
        {
            header: 'Priority',
            accessor: 'priority',
        },

    ];

    const breadcrumbs = [
        { label: 'Access Control', path: '' },
        { label: 'Roles', path: '' }
    ];

    return (
        <PageLayout
            title="Manage Roles"
            breadcrumbs={breadcrumbs}
        >
            <div className="flex justify-end items-start">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">
                    <AddIcon className="w-4 h-4" />
                    Add New
                </button>
            </div>
            {isLoading ? (
                <div className="text-center py-10 text-gray-500">Loading roles...</div>
            ) : isError ? (
                <div className="text-center py-10 text-red-500">Error loading roles. </div>
            ) : (

                <Table
                    columns={columns}
                    data={data?.roles || []}
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

export default Roles;
