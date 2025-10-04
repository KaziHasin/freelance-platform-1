import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024; // lg breakpoint
            setIsMobile(mobile);
            if (mobile) {
                setSidebarCollapsed(true);
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const toggleSidebar = () => {
        setSidebarCollapsed(prev => !prev);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900", children: [isMobile && !sidebarCollapsed && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden", onClick: () => setSidebarCollapsed(true) })), _jsx("div", { className: `${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'fixed inset-y-0 left-0 z-30'}`, children: _jsx(Sidebar, { collapsed: sidebarCollapsed, isMobile: isMobile, onClose: () => setSidebarCollapsed(true) }) }), _jsxs("div", { className: `flex flex-col min-h-screen ${!isMobile && (sidebarCollapsed ? 'ml-20' : 'ml-64')}`, children: [_jsx(Header, { onMenuClick: toggleSidebar }), _jsx("main", { className: "flex-1 p-4 lg:p-6 overflow-x-hidden", children: children }), _jsx(Footer, {})] })] }));
};
export default Layout;
