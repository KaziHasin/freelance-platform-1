import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
const Alert = ({ title, message, variant = 'info', dismissible = false, onDismiss, className = '' }) => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible)
        return null;
    const variantClasses = {
        info: 'bg-blue-50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
        success: 'bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800',
        warning: 'bg-yellow-50 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800',
        error: 'bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800'
    };
    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss?.();
    };
    return (_jsx("div", { className: `rounded-lg border p-4 ${variantClasses[variant]} ${className}`, role: "alert", children: _jsxs("div", { className: "flex items-start", children: [_jsxs("div", { className: "flex-1", children: [title && (_jsx("h3", { className: "text-sm font-medium mb-1", children: title })), _jsx("p", { className: "text-sm", children: message })] }), dismissible && (_jsxs("button", { type: "button", className: "ml-4 inline-flex flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none", onClick: handleDismiss, children: [_jsx("span", { className: "sr-only", children: "Dismiss" }), _jsx(XMarkIcon, { className: "h-5 w-5" })] }))] }) }));
};
export default Alert;
