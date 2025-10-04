import { jsx as _jsx } from "react/jsx-runtime";
import { PencilIcon } from '@heroicons/react/24/outline';
const EditButton = ({ title = 'Edit', icon = _jsx(PencilIcon, { className: "w-4 h-4" }), size = 'sm', className = '', ...props }) => {
    const sizeClasses = {
        sm: 'p-1',
        md: 'p-1.5',
        lg: 'p-2'
    };
    return (_jsx("button", { className: `${sizeClasses[size]} rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-900/70 dark:hover:bg-blue-900/80 text-white hover:text-white dark:text-white dark:hover:text-blue-300 transition-colors duration-200 ${className}`, title: title, "aria-label": title, ...props, children: icon }));
};
export default EditButton;
