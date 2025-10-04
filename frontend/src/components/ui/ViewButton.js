import { jsx as _jsx } from "react/jsx-runtime";
import { EyeIcon } from '@heroicons/react/24/outline';
const ViewButton = ({ title = 'Edit', icon = _jsx(EyeIcon, { className: "w-4 h-4" }), size = 'sm', className = '', ...props }) => {
    const sizeClasses = {
        sm: 'p-1',
        md: 'p-1.5',
        lg: 'p-2'
    };
    return (_jsx("button", { className: `${sizeClasses[size]} rounded bg-green-600 hover:bg-green-700 dark:bg-green-900/70 dark:hover:bg-green-900/80 text-white hover:text-white dark:text-white dark:hover:text-green-300 transition-colors duration-200 ${className}`, title: title, "aria-label": title, ...props, children: icon }));
};
export default ViewButton;
