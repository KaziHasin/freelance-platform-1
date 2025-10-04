import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FileInput = ({ label, icon, id, ...props }) => {
    const inputId = id || props.name || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;
    return (_jsxs("div", { children: [label && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2", children: label })), _jsxs("div", { className: "relative", children: [icon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center", children: icon })), _jsx("input", { type: "file", id: inputId, ...props, className: `w-full ${icon ? "pl-10" : "pl-4"} py-2 
            border border-gray-200 dark:border-gray-600 rounded-lg 
            focus:border-indigo-500 hover:border-indigo-500 
            focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
            dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 
            file:rounded-md file:border-0 file:text-sm file:font-semibold 
            file:bg-indigo-50 file:text-indigo-700 
            hover:file:bg-indigo-100 
            transition-colors duration-200 ease-in-out` })] })] }));
};
