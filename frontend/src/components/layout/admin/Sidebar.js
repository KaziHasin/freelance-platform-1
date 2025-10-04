import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getUser } from '@/lib/auth';
import { ChevronDownIcon, XMarkIcon, BellIcon, UserCircleIcon, } from '@heroicons/react/24/outline';
import { menuItems } from '@/constants/adminMenu';
const Sidebar = ({ collapsed, isMobile = false, onClose }) => {
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [expandedItems, setExpandedItems] = useState([]);
    const toggleExpand = (path) => {
        setExpandedItems(prev => prev.includes(path)
            ? prev.filter(p => p !== path)
            : [...prev, path]);
    };
    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };
    useEffect(() => {
        menuItems.forEach(item => {
            if (item.children) {
                const childActive = item.children.some(child => location.pathname.startsWith(child.path));
                if (childActive && !expandedItems.includes(item.path)) {
                    setExpandedItems(prev => [...prev, item.path]);
                }
            }
        });
    }, [location.pathname]);
    const renderMenuItem = (item, level = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.includes(item.path);
        const isItemActive = isActive(item.path);
        return (_jsxs("div", { children: [_jsx("div", { className: `relative group`, onMouseEnter: () => setHoveredItem(item.path), onMouseLeave: () => setHoveredItem(null), children: _jsxs(Link, { to: item.path, className: `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                            ${isItemActive
                            ? 'bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300/50 dark:hover:bg-gray-800/50'} ${level > 0 ? 'pl-8' : ''}`, onClick: (e) => {
                            if (hasChildren) {
                                e.preventDefault();
                                toggleExpand(item.path);
                            }
                        }, children: [level === 0 ? (_jsx(item.icon, { className: "h-5 w-5 flex-shrink-0" })) : (_jsx(item.icon, { className: "h-3 w-3 flex-shrink-0" })), !collapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "ml-3 text-sm flex-1", children: item.title }), hasChildren && (_jsx(ChevronDownIcon, { className: `h-4 w-4 transition-transform duration-300 ease-in-out ${isExpanded ? 'transform rotate-180' : ''}` }))] })), collapsed && hoveredItem === item.path && !isMobile && (_jsx("div", { className: "absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded shadow-lg z-50", children: item.title }))] }) }), hasChildren && !collapsed && (_jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`, children: _jsx("div", { className: "mt-1 space-y-1", children: item.children.map(child => renderMenuItem(child, level + 1)) }) }))] }, item.path));
    };
    return (_jsxs(_Fragment, { children: [isMobile && !collapsed && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300", onClick: onClose, style: { zIndex: 40 } })), _jsxs("aside", { className: `fixed inset-y-0 left-0 bg-gray-200 dark:bg-gray-900 shadow-sm border-r border-gray-300 dark:border-gray-700 transition-all duration-300 flex flex-col ${isMobile
                    ? `w-64 ${collapsed ? '-translate-x-full' : 'translate-x-0'}`
                    : collapsed
                        ? 'w-20'
                        : 'w-64'}`, style: { zIndex: 50 }, children: [isMobile && !collapsed && (_jsx("button", { onClick: onClose, className: "absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 lg:hidden", style: { zIndex: 60 }, children: _jsx(XMarkIcon, { className: "h-5 w-5 text-gray-600 dark:text-gray-300" }) })), _jsx("div", { className: "px-4 py-6", children: _jsx("h1", { className: `text-xl font-bold text-gray-800 dark:text-white ${collapsed ? 'hidden' : 'block'}`, children: "Admin Panel" }) }), _jsx("nav", { className: "flex-1 overflow-y-auto px-2 space-y-1", children: menuItems.map(item => renderMenuItem(item)) }), _jsx("div", { className: "p-4 border-t border-gray-300 dark:border-gray-700", children: _jsxs("div", { className: "relative", children: [_jsxs("button", { className: "p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200 relative", children: [_jsx(BellIcon, { className: "h-6 w-6 text-gray-600 dark:text-gray-300" }), _jsx("span", { className: "absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" })] }), _jsx("div", { className: "mt-2", children: _jsxs(Link, { to: "admin/users/profile", className: "w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200", children: [_jsx("div", { className: "flex-shrink-0", children: getUser()?.profileImage ? (_jsx("img", { src: getUser()?.profileImage, alt: "Profile", className: "h-8 w-8 rounded-full object-cover" })) : (_jsx(UserCircleIcon, { className: "h-8 w-8 text-gray-600 dark:text-gray-300" })) }), !collapsed && (_jsx(_Fragment, { children: _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-white truncate", children: getUser()?.name }), _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 truncate", children: getUser()?.email })] }) }))] }) })] }) })] })] }));
};
export default Sidebar;
