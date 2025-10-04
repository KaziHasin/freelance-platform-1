import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg w-full", children: [_jsx("h2", { className: "text-2xl font-bold text-red-600 mb-4", children: "Something went wrong" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: "We're sorry, but something went wrong. Please try refreshing the page or contact support if the problem persists." }), _jsx("button", { onClick: () => window.location.reload(), className: "bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors", children: "Refresh Page" })] }) }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
