import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import DeveloperHeader from './DeveloperHeader';
import DeveloperSidebar from './DeveloperSidebar';
const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (_jsxs("div", { className: "h-screen flex bg-gray-50", children: [_jsxs("div", { className: `
        fixed inset-0 flex z-40 lg:hidden
        ${sidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `, role: "dialog", "aria-modal": "true", children: [_jsx("div", { className: `
            fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-linear duration-300
            ${sidebarOpen ? 'opacity-100' : 'opacity-0'}
          `, "aria-hidden": "true", onClick: () => setSidebarOpen(false) }), _jsxs("div", { className: `
          relative flex-1 flex flex-col max-w-xs w-full bg-[#001e2b] transition ease-in-out duration-300 transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `, children: [_jsx("div", { className: "absolute top-0 right-0 -mr-12 pt-2", children: _jsxs("button", { type: "button", className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", onClick: () => setSidebarOpen(false), children: [_jsx("span", { className: "sr-only", children: "Close sidebar" }), _jsx("svg", { className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })] }) }), _jsx(DeveloperSidebar, {})] })] }), _jsx(DeveloperSidebar, {}), _jsxs("div", { className: "lg:pl-64 flex flex-col flex-1", children: [_jsx(DeveloperHeader, { onMenuClick: () => setSidebarOpen(true) }), _jsx("main", { className: "flex-1 pb-8", children: _jsx("div", { className: "px-4 sm:px-6 lg:px-8", children: children }) })] })] }));
};
export default Layout;
