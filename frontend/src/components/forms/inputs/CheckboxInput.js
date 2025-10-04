import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CheckboxInput = ({ label, id, switch: isSwitch, ...props }) => {
    const inputId = id || props.name || (label ? `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : "");
    if (isSwitch) {
        // Switch style
        return (_jsxs("div", { className: "flex flex-col", children: [label && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2", children: label })), _jsxs("div", { className: "relative inline-block w-12 h-7", children: [_jsx("input", { type: "checkbox", id: inputId, ...props, className: "sr-only peer" }), _jsx("div", { className: "w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full\r\n                                    peer-checked:bg-green-500 transition-colors duration-200 ease-in-out" }), _jsx("div", { className: "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow\r\n                                    peer-checked:translate-x-5 transition-transform duration-200 ease-in-out" })] })] }));
    }
    // Regular checkbox style
    return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", id: inputId, ...props, className: "h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-0" }), label && (_jsx("label", { htmlFor: inputId, className: "text-sm text-gray-700 dark:text-gray-300", children: label }))] }));
};
