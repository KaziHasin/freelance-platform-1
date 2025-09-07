import React, { useState } from 'react';
import {
    PlusIcon as AddIcon,
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/layout/PageLayout';
import { useGetSubjectsQuery } from '@/store/slices/subjectSlice';
import Table from '@/components/ui/Table';
import EditButton from '@/components/ui/EditButton';
import DeleteButton from '@/components/ui/DeleteButton';
import TableFilter from './components/TableFilter';

const Subjects: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState({
        search: '',
    });

    const { data, isLoading, isError } = useGetSubjectsQuery({
        page,
        limit,
        search: filters.search,
    });

    const subjects = data?.subjects.map((subject) => ({
        id: subject.id,
        name: subject.name,
    })) || [];

    const columns = [
        {
            header: 'Name',
            accessor: 'name',
        },
        {
            header: 'Actions',
            accessor: (subject) => (
                <div className="flex items-center space-x-2">
                    <EditButton
                        title={`Edit ${subject.name}`}
                        onClick={() => {
                        }}
                    />
                    <DeleteButton
                        title={`Delete ${subject.name}`}
                        onClick={() => {

                        }}
                    />
                </div>
            ),
        },
    ];

    const breadcrumbs = [
        { label: 'Manage Subjects', path: '' },
        { label: 'Subjects', path: '' }
    ];

    return (
        <PageLayout
            title="Manage Subjects"
            breadcrumbs={breadcrumbs}
        >
            <div className="flex justify-end items-start">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">
                    <AddIcon className="w-4 h-4" />
                    Add New
                </button>
            </div>
            <TableFilter
                onFilterChange={setFilters}
            />

            {isLoading ? (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading subjects...</div>
            ) : isError ? (
                <div className="text-center py-10 text-red-500">Error loading subjects.</div>
            ) : (
                <div className="mt-4">
                    <Table
                        columns={columns}
                        data={subjects}
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
                </div>
            )}
        </PageLayout>
    )
}
export default Subjects;