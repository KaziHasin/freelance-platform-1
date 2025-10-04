import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format } from 'date-fns';
const PaymentHistory = ({ payments }) => {
    const getStatusBadgeColor = (status) => {
        return status === 'success'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800';
    };
    const currencySymbols = {
        INR: '₹',
        USD: '$',
        EUR: '€',
    };
    return (_jsxs("div", { className: "bg-white dark:bg-gray-800 shadow rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Payment History" }), _jsx("div", { className: "mt-6", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Date" }), _jsx("th", { className: "px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Package" }), _jsx("th", { className: "px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Amount" }), _jsx("th", { className: "px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Payment Method" }), _jsx("th", { className: "px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Status" })] }) }), _jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: payments.map((payment) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300", children: format(new Date(payment.createdAt), 'PP') }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300", children: payment.packageTitle }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300", children: [currencySymbols[payment.currency], payment.amount] }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 capitalize", children: payment.paymentMethod }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(payment.status)}`, children: payment.status }) })] }, payment._id))) })] }) }) })] }));
};
export default PaymentHistory;
