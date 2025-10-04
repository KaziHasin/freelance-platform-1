import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Card = ({ title, children, className = '', variant = 'default' }) => {
    const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg';
    const variantClasses = {
        default: 'shadow-sm',
        bordered: 'border border-gray-200 dark:border-gray-700',
        elevated: 'shadow-lg'
    };
    return (_jsxs("div", { className: `${baseClasses} ${variantClasses[variant]} ${className}`, children: [title && (_jsx("div", { className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700", children: _jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: title }) })), _jsx("div", { className: "p-6", children: children })] }));
};
export default Card;
export const CardHeader = ({ children, className = '' }) => {
    return (_jsx("div", { className: `px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl ${className}`, children: children }));
};
export const CardBody = ({ children, className = '' }) => {
    return (_jsx("div", { className: `px-6 py-4 ${className}`, children: children }));
};
export const CardFooter = ({ children, className = '' }) => {
    return (_jsx("div", { className: `px-6 py-4 border-t border-gray-200 dark:border-gray-700 rounded-b-xl ${className}`, children: children }));
};
