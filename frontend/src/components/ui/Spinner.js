import { jsx as _jsx } from "react/jsx-runtime";
export const Spinner = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'h-4 w-4 border-2',
        md: 'h-8 w-8 border-3',
        lg: 'h-12 w-12 border-4',
    };
    return (_jsx("div", { className: `
                inline-block rounded-full 
                border-green-500 border-solid
                border-t-transparent
                animate-[spinner-rotate_0.6s_linear_infinite]
                ${sizeClasses[size]}
                ${className}
            `, role: "status", "aria-label": "loading", children: _jsx("span", { className: "sr-only", children: "Loading..." }) }));
};
// Add the custom animation to your Tailwind CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes spinner-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
