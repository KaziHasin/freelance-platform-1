import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TextInput = ({ label, icon, id, required, ...props }) => {
    const inputId = id || props.name || (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : "");
    return (_jsxs("div", { children: [label && (_jsxs("label", { htmlFor: inputId, className: "block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2", children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] })), _jsxs("div", { className: "relative", children: [icon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center", children: icon })), _jsx("input", { id: inputId, ...props, className: `w-full ${icon ? "pl-10" : "pl-4"} py-3 
            border border-gray-200 dark:border-gray-600 rounded-lg 
            focus:border-indigo-500 hover:border-indigo-500 
            focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
            dark:bg-gray-700 dark:text-white 
            transition-colors duration-200 ease-in-out` })] })] }));
};
