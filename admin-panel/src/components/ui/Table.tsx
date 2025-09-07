import { Column } from '@/types/tableColumn';
import React, { useState } from 'react';



interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    sortable?: boolean;
    pagination?: boolean;
    itemsPerPage?: number;
    currentPage?: number;
    totalEntries?: number;
    onPageChange?: (page: number) => void;
    onItemsPerPageChange?: (limit: number) => void;
    className?: string;
}

function Table<T extends { id: string | number }>({
    columns,
    data,
    sortable = true,
    pagination = true,
    itemsPerPage: initialItemsPerPage = 10,
    currentPage: controlledPage,
    totalEntries,
    onPageChange,
    onItemsPerPageChange,
    className = '',
}: TableProps<T>) {
    const [sortConfig, setSortConfig] = useState<{
        key: keyof T;
        direction: 'asc' | 'desc';
    } | null>(null);

    const [itemsPerEntries, setItemsPerEntries] = useState(initialItemsPerPage);
    const currentPage = controlledPage ?? 1;

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;

        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    const paginatedData = pagination && totalEntries
        ? sortedData
        : sortedData.slice((currentPage - 1) * itemsPerEntries, currentPage * itemsPerEntries);


    const totalPages = Math.ceil(totalEntries / itemsPerEntries);

    const requestSort = (key: keyof T) => {
        if (!sortable) return;
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig?.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (page: number) => {
        if (onPageChange) onPageChange(page);
    };

    const handleLimitChange = (limit: number) => {
        setItemsPerEntries(limit);
        if (onItemsPerPageChange) onItemsPerPageChange(limit);
        handlePageChange(1);
    };

    return (
        <div className="bg-white border dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-sm py-2 my-4">
            <div className={`overflow-x-auto ${className}`}>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 m-2">
                        <select
                            value={itemsPerEntries}
                            onChange={(e) => handleLimitChange(Number(e.target.value))}
                            className="block w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded text-sm focus:outline-none"
                        >
                            {[10, 25, 50, 100].map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                        <span>entries per page</span>
                    </div>
                </div>

                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${sortable && column.sortable !== false
                                        ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                                        : ''
                                        }`}
                                    onClick={() => {
                                        if (column.sortable !== false && typeof column.accessor === 'string') {
                                            requestSort(column.accessor);
                                        }
                                    }}

                                >
                                    <div className="flex items-center space-x-1">
                                        <span>{column.header}</span>
                                        {sortable && column.sortable !== false && sortConfig?.key === column.accessor && (
                                            <span>
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                        {paginatedData.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                                >
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            paginatedData.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    {columns.map((column, index) => (
                                        <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                            {typeof column.accessor === 'function'
                                                ? column.accessor(item)
                                                : column.render
                                                    ? column.render(item[column.accessor], item)
                                                    : String(item[column.accessor])}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>


                <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:px-6">
                    <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {totalEntries > 0 ? (
                                    <>
                                        Showing{' '}
                                        <span className="font-medium">
                                            {(currentPage - 1) * itemsPerEntries + 1}
                                        </span>{' '}
                                        to{' '}
                                        <span className="font-medium">
                                            {Math.min(currentPage * itemsPerEntries, totalEntries)}
                                        </span>{' '}
                                        of <span className="font-medium">{totalEntries}</span> results
                                    </>
                                ) : (
                                    'Showing 0 to 0 of 0 results'
                                )}
                            </p>
                        </div>
                        {pagination && totalPages > 1 && (
                            <div className="w-full max-w-[400px] overflow-x-auto text-end">
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page
                                                ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300'
                                                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Table; 