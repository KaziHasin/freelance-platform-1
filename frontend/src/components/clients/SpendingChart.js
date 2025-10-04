import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
const data = [
    { month: "Jan", spent: 1200 },
    { month: "Feb", spent: 2100 },
    { month: "Mar", spent: 800 },
    { month: "Apr", spent: 1600 },
    { month: "May", spent: 2500 },
    { month: "Jun", spent: 1800 },
];
const SpendingChart = () => {
    return (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-200 mb-4", children: "Monthly Spending Trend" }), _jsx("div", { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#374151" }), _jsx(XAxis, { dataKey: "month", stroke: "#9CA3AF" }), _jsx(YAxis, { stroke: "#9CA3AF" }), _jsx(Tooltip, { contentStyle: {
                                    backgroundColor: "#1F2937",
                                    border: "none",
                                    color: "#F9FAFB",
                                } }), _jsx(Line, { type: "monotone", dataKey: "spent", stroke: "#10B981", strokeWidth: 3, dot: { r: 5, fill: "#10B981" } })] }) }) })] }));
};
export default SpendingChart;
