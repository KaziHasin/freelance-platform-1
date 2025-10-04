import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
const DeveloperSidebar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    const navigation = [
        {
            name: 'Dashboard',
            href: '/developer/dashboard',
            icon: (_jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) })),
        },
        {
            name: 'Projects',
            href: '/developer/projects',
            icon: (_jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) })),
        },
        {
            name: 'My Work',
            href: '/developer/my-projects',
            icon: (_jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }) })),
        },
        {
            name: 'Skills',
            href: '/developer/skills',
            icon: (_jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" }) })),
        },
        {
            name: 'Messages',
            href: '/developer/messages',
            icon: (_jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }) })),
        },
        {
            name: 'Profile',
            href: '/developer/profile',
            icon: (_jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) })),
        },
    ];
    return (_jsxs("div", { className: "hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-[#001e2b]", children: [_jsx("div", { className: "flex items-center justify-center h-14 border-b border-[#0c2a3a]", children: _jsx(Link, { to: "/developer/dashboard", className: "text-xl font-bold text-white", children: "Developer Portal" }) }), _jsx("nav", { className: "mt-5 flex-1 px-2 space-y-1", children: navigation.map((item) => (_jsxs(Link, { to: item.href, className: `
              group flex items-center px-2 py-2 text-sm font-medium rounded-md
              ${isActive(item.href)
                        ? 'bg-[#004d40] text-white'
                        : 'text-gray-300 hover:bg-[#0c2a3a] hover:text-white'}
            `, children: [_jsx("div", { className: `
              mr-3 flex-shrink-0
              ${isActive(item.href)
                                ? 'text-white'
                                : 'text-gray-400 group-hover:text-white'}
            `, children: item.icon }), item.name] }, item.name))) })] }));
};
export default DeveloperSidebar;
