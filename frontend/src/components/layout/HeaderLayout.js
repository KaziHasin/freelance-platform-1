import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const HeaderLayout = ({ title, breadcrumbs = [] }) => {
    return (_jsx("div", { className: "bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 w-full rounded-md -mt-2 sm:-mt-4", children: _jsxs("div", { className: "flex justify-between align-items-center", children: [_jsx("h1", { className: "h3 mb-0 text-xl font-bold w-3/4 sm:w-auto text-gray-900 dark:text-white", children: title }), _jsx("nav", { "aria-label": "breadcrumb", className: "overflow-x-auto", children: _jsx("ol", { className: "breadcrumb mb-0 flex whitespace-nowrap", children: breadcrumbs.map((crumb, index) => (_jsx("li", { className: `breadcrumb-item flex items-center ${index === breadcrumbs.length - 1 ? 'active' : ''}`, children: index === breadcrumbs.length - 1 ? (_jsx("span", { className: "text-gray-600 dark:text-gray-400", children: crumb.label })) : (_jsxs(_Fragment, { children: [_jsx(Link, { to: crumb.path, className: "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400", children: crumb.label }), _jsx(ChevronRightIcon, { className: "mx-1 text-gray-400 dark:text-gray-600 w-4 h-4" })] })) }, index))) }) })] }) }));
};
export default HeaderLayout;
