import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Button = ({ children, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, fullWidth = false, className = '', disabled, ...props }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-colors duration-200 border';
    const variantClasses = {
        primary: 'bg-blue-700 hover:bg-blue-800 text-white border-transparent',
        secondary: 'bg-gray-700 hover:bg-gray-800 text-white border-transparent',
        success: 'bg-green-700 hover:bg-green-800 text-white border-transparent',
        danger: 'bg-red-700 hover:bg-red-800 text-white border-transparent',
        warning: 'bg-yellow-500 hover:bg-yellow-600 text-white border-transparent',
        info: 'bg-cyan-500 hover:bg-cyan-600 text-white border-transparent',
        "outline-primary": "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white",
        "outline-secondary": "bg-transparent text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white",
        "outline-success": "bg-transparent text-green-600 border-green-600 hover:bg-green-600 hover:text-white",
        "outline-danger": "bg-transparent text-red-600 border-red-600 hover:bg-red-600 hover:text-white",
        "outline-warning": "bg-transparent text-yellow-600 border-yellow-600 hover:bg-yellow-500 hover:text-white",
        "outline-info": "bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white",
    };
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };
    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '';
    return (_jsxs("button", { className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`, disabled: disabled || isLoading, ...props, children: [isLoading && (_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), !isLoading && leftIcon && _jsx("span", { className: "mr-2", children: leftIcon }), children, !isLoading && rightIcon && _jsx("span", { className: "ml-2", children: rightIcon })] }));
};
export default Button;
