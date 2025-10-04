import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Tabs = ({ tabs, defaultActiveTab = 0, className = '' }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    return (_jsxs("div", { className: `w-full ${className}`, children: [_jsx("div", { className: "border-b border-gray-200", children: _jsx("nav", { className: "-mb-px flex space-x-8", "aria-label": "Tabs", children: tabs.map((tab, index) => (_jsx("button", { onClick: () => setActiveTab(index), className: `
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === index
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `, "aria-current": activeTab === index ? 'page' : undefined, children: tab.label }, index))) }) }), _jsx("div", { className: "mt-4", children: tabs[activeTab].content })] }));
};
export default Tabs;
