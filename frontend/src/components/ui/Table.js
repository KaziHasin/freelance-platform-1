import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
function Table({ columns, data, sortable = true, pagination = true, itemsPerPage: initialItemsPerPage = 10, currentPage: controlledPage, totalEntries, onPageChange, onItemsPerPageChange, className = '', }) {
    const [sortConfig, setSortConfig] = useState(null);
    const [itemsPerEntries, setItemsPerEntries] = useState(initialItemsPerPage);
    const currentPage = controlledPage ?? 1;
    const sortedData = React.useMemo(() => {
        if (!sortConfig)
            return data;
        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key])
                return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key])
                return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);
    const paginatedData = pagination && totalEntries
        ? sortedData
        : sortedData.slice((currentPage - 1) * itemsPerEntries, currentPage * itemsPerEntries);
    const totalPages = Math.ceil(totalEntries / itemsPerEntries);
    const requestSort = (key) => {
        if (!sortable)
            return;
        let direction = 'asc';
        if (sortConfig?.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    const handlePageChange = (page) => {
        if (onPageChange)
            onPageChange(page);
    };
    const handleLimitChange = (limit) => {
        setItemsPerEntries(limit);
        if (onItemsPerPageChange)
            onItemsPerPageChange(limit);
        handlePageChange(1);
    };
    return (_jsx("div", { className: "bg-white border dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-sm py-2 my-4", children: _jsxs("div", { className: `overflow-x-auto ${className}`, children: [_jsx("div", { className: "flex items-center justify-between mb-2", children: _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 m-2", children: [_jsx("select", { value: itemsPerEntries, onChange: (e) => handleLimitChange(Number(e.target.value)), className: "block w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded text-sm focus:outline-none", children: [10, 25, 50, 100].map((size) => (_jsx("option", { value: size, children: size }, size))) }), _jsx("span", { children: "entries per page" })] }) }), _jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [_jsx("thead", { className: "bg-gray-50 dark:bg-gray-800", children: _jsx("tr", { children: columns.map((column, index) => (_jsx("th", { scope: "col", className: `px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${sortable && column.sortable !== false
                                        ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                                        : ''}`, onClick: () => {
                                        if (column.sortable !== false && typeof column.accessor === 'string') {
                                            requestSort(column.accessor);
                                        }
                                    }, children: _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx("span", { children: column.header }), sortable && column.sortable !== false && sortConfig?.key === column.accessor && (_jsx("span", { children: sortConfig.direction === 'asc' ? '↑' : '↓' }))] }) }, index))) }) }), _jsx("tbody", { className: "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700", children: paginatedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length, className: "px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400", children: "No data available" }) })) : (paginatedData.map((item) => (_jsx("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-800", children: columns.map((column, index) => (_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300", children: typeof column.accessor === 'function'
                                        ? column.accessor(item)
                                        : column.render
                                            ? column.render(item[column.accessor], item)
                                            : String(item[column.accessor]) }, index))) }, item.id)))) })] }), _jsx("div", { className: "flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: _jsxs("div", { className: "sm:flex-1 sm:flex sm:items-center sm:justify-between", children: [_jsx("div", { children: _jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: totalEntries > 0 ? (_jsxs(_Fragment, { children: ["Showing", ' ', _jsx("span", { className: "font-medium", children: (currentPage - 1) * itemsPerEntries + 1 }), ' ', "to", ' ', _jsx("span", { className: "font-medium", children: Math.min(currentPage * itemsPerEntries, totalEntries) }), ' ', "of ", _jsx("span", { className: "font-medium", children: totalEntries }), " results"] })) : ('Showing 0 to 0 of 0 results') }) }), pagination && totalPages > 1 && (_jsx("div", { className: "w-full max-w-[400px] overflow-x-auto text-end", children: _jsx("nav", { className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px", children: Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (_jsx("button", { onClick: () => handlePageChange(page), className: `relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page
                                            ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300'
                                            : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`, children: page }, page))) }) }))] }) })] }) }));
}
export default Table;
