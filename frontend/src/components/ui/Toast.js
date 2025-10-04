import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const lightVariantClasses = {
    info: "bg-blue-50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
    success: "bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
    warning: "bg-yellow-50 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800",
    error: "bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
};
const deepVariantClasses = {
    info: "bg-blue-600 text-white border-blue-700",
    success: "bg-green-600 text-white border-green-700",
    warning: "bg-yellow-600 text-white border-yellow-700",
    error: "bg-red-600 text-white border-red-700",
};
const positionClasses = {
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
};
const Toast = ({ open = true, onOpenChange, title, description, action, variant = "info", theme = "light", className = "", duration = 3000, position = "top-right", }) => {
    useEffect(() => {
        if (open && duration > 0) {
            const timer = setTimeout(() => {
                onOpenChange?.(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onOpenChange]);
    if (!open)
        return null;
    const handleClose = () => {
        onOpenChange?.(false);
    };
    const variantClasses = theme === "deep" ? deepVariantClasses : lightVariantClasses;
    console.log(theme);
    return (_jsxs("div", { className: `fixed z-50 min-w-[360px] max-w-xs rounded-lg border p-4 shadow-lg transition-all duration-300 ${variantClasses[variant]} ${positionClasses[position]} ${className}`, role: "status", children: [_jsxs("div", { className: "flex items-start", children: [_jsxs("div", { className: "flex-1", children: [title && _jsx("h3", { className: "text-sm font-semibold mb-1", children: title }), description && _jsx("p", { className: "text-sm opacity-90", children: description })] }), _jsxs("button", { type: "button", className: "ml-4 inline-flex flex-shrink-0 text-current/70 hover:text-current focus:outline-none", onClick: handleClose, children: [_jsx("span", { className: "sr-only", children: "Dismiss" }), _jsx("svg", { className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })] })] }), action && _jsx("div", { className: "mt-3 flex justify-end", children: action })] }));
};
export default Toast;
