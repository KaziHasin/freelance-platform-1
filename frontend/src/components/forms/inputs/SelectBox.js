import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SelectBox = ({ label, options, id, required, ...props }) => {
    const selectId = id || props.name || `select-${label?.replace(/\s+/g, "-").toLowerCase()}`;
    return (_jsxs("div", { children: [label && (_jsxs("label", { htmlFor: selectId, className: "block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2", children: [label, " ", required && _jsx("span", { className: "text-red-500", children: "*" })] })), _jsx("select", { id: selectId, ...props, className: `w-full pl-4 py-3 
                    border border-gray-200 dark:border-gray-600 rounded-lg 
                    focus:border-indigo-500 hover:border-indigo-500 
                    focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
                    dark:bg-gray-700 dark:text-white 
                    transition-colors duration-200 ease-in-out`, children: options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) })] }));
};
