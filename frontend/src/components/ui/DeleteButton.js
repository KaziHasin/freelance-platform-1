import { jsx as _jsx } from "react/jsx-runtime";
import { TrashIcon } from '@heroicons/react/24/outline';
const DeleteButton = ({ title = 'Delete', icon = _jsx(TrashIcon, { className: "w-4 h-4" }), size = 'sm', className = '', ...props }) => {
    const sizeClasses = {
        sm: 'p-1',
        md: 'p-1.5',
        lg: 'p-2'
    };
    return (_jsx("button", { className: `${sizeClasses[size]} rounded bg-red-600 hover:bg-red-700 dark:bg-red-900/70 dark:hover:bg-red-900/80 text-white hover:text-white dark:text-white dark:hover:text-red-300 transition-colors duration-200 ${className}`, title: title, "aria-label": title, ...props, children: icon }));
};
export default DeleteButton;
