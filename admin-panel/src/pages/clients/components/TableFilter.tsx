import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TableFilterProps {
    onFilterChange: (filters: {
        search: string;
        status: string;
    }) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = React.useState({
        search: '',
        status: '',
    });

    const handleFilterChange = (key: string, value: string) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const isFiltersActive =
        filters.search !== '' || filters.status !== '';

    const clearFilters = () => {
        const emptyFilters = {
            search: '',
            status: '',
        };
        setFilters(emptyFilters);
        onFilterChange(emptyFilters);
    };

    return (
        <div className="flex flex-col m-4 mx-2">
            <div className="flex flex-wrap gap-4 items-end">
                {/* Search Input */}
                <div className="flex-1 min-w-[200px]">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        aria-label='Search by name or email'
                    />
                </div>

                {/* Status Filter */}
                <div className="flex-1 min-w-[200px]">
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={filters.status}
                        onChange={(e) => handleFilterChange('status', e.target.value)}
                    >
                        <option value="">Select Status</option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                    </select>
                </div>


                {/* Clear Filters Button */}
                {isFiltersActive && (
                    <div className="flex justify-end">
                        <button
                            onClick={clearFilters}
                            className="inline-flex items-center px-2 py-2 text-base text-white bg-red-600 hover:bg-red-700 transition-colors rounded"
                        >
                            <XMarkIcon className="w-4 h-4 mr-1" />
                            Reset
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableFilter;
