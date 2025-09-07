import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TableFilterProps {
    onFilterChange: (filters: {
        search: string;
    }) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = React.useState({
        search: '',
    });

    const handleFilterChange = (key: string, value: string) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const isFiltersActive =
        filters.search !== '';

    const clearFilters = () => {
        const emptyFilters = {
            search: '',
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
                        placeholder="Search by Subject....."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        aria-label='Search by Subject'
                    />
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
