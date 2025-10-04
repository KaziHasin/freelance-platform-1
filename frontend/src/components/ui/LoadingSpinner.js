import { jsx as _jsx } from "react/jsx-runtime";
const LoadingSpinner = ({ size = 'md', fullScreen = false }) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
    };
    const spinner = (_jsx("div", { className: `animate-spin rounded-full border-b-2 border-primary ${sizeClasses[size]}` }));
    if (fullScreen) {
        return (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50", children: spinner }));
    }
    return (_jsx("div", { className: "flex items-center justify-center p-4", children: spinner }));
};
export default LoadingSpinner;
