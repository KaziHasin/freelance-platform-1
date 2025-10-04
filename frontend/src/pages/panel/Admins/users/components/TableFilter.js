import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
const TableFilter = ({ onFilterChange, roles }) => {
    const [filters, setFilters] = React.useState({
        search: '',
        status: '',
        role: ''
    });
    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };
    const isFiltersActive = filters.search !== '' || filters.status !== '' || filters.role !== '';
    const clearFilters = () => {
        const emptyFilters = {
            search: '',
            status: '',
            role: ''
        };
        setFilters(emptyFilters);
        onFilterChange(emptyFilters);
    };
    return (_jsx("div", { className: "flex flex-col m-4 mx-2", children: _jsxs("div", { className: "flex flex-wrap gap-4 items-end", children: [_jsx("div", { className: "flex-1 min-w-[200px]", children: _jsx("input", { type: "text", placeholder: "Search by name or email...", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white", value: filters.search, onChange: (e) => handleFilterChange('search', e.target.value), "aria-label": 'Search by name or email' }) }), _jsx("div", { className: "flex-1 min-w-[200px]", children: _jsxs("select", { className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white", value: filters.status, onChange: (e) => handleFilterChange('status', e.target.value), children: [_jsx("option", { value: "", children: "Select Status" }), _jsx("option", { value: "ACTIVE", children: "Active" }), _jsx("option", { value: "INACTIVE", children: "Inactive" })] }) }), _jsx("div", { className: "flex-1 min-w-[200px]", children: _jsxs("select", { className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white", value: filters.role, onChange: (e) => handleFilterChange('role', e.target.value), children: [_jsx("option", { value: "", children: "Select Role" }), roles.map((role) => (_jsx("option", { value: role.id, children: role.name }, role.id)))] }) }), isFiltersActive && (_jsx("div", { className: "flex justify-end", children: _jsxs("button", { onClick: clearFilters, className: "inline-flex items-center px-2 py-2 text-base text-white bg-red-600 hover:bg-red-700 transition-colors rounded", children: [_jsx(XMarkIcon, { className: "w-4 h-4 mr-1" }), "Reset"] }) }))] }) }));
};
export default TableFilter;
