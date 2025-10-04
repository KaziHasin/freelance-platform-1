import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashboardStats from '@/components/clients/DashboardStats';
import ActiveProjects from '@/components/clients/ActiveProjects';
import RecentActivity from '@/components/clients/RecentActivity';
import TopFreelancers from '@/components/clients/TopFreelancers';
import { PlusIcon } from '@heroicons/react/24/outline';
import SpendingChart from '@/components/clients/SpendingChart';
const Dashboard = () => {
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "mx-auto", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("div", { children: _jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-300", children: "Welcome back! Here's what's happening with your projects." }) }), _jsxs("button", { type: "button", className: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500", children: [_jsx(PlusIcon, { className: "-ml-1 mr-2 h-5 w-5 dark:text-gray-200" }), "Post New Project"] })] }), _jsx("div", { className: "mb-8", children: _jsx(DashboardStats, {}) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 space-y-8", children: [_jsx(ActiveProjects, {}), _jsx("div", { children: _jsx(SpendingChart, {}) })] }), _jsxs("div", { className: "space-y-8", children: [_jsx(RecentActivity, {}), _jsx(TopFreelancers, {})] })] })] }) }));
};
export default Dashboard;
