import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import PaymentSummary from '../../../components/PaymentSummary';
import { useGetPackageQuery } from '@/store/slices/PackageSlice';
import Button from '@/components/ui/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/hooks/use-toast';
const PlanSelection = () => {
    const navigate = useNavigate();
    const [selectedInterval, setSelectedInterval] = useState('monthly');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const currency = (searchParams.get("currency") ?? "INR");
    const { data: pkg, isLoading: isFetching } = useGetPackageQuery(id);
    const currencySymbols = {
        INR: "₹",
        USD: "$",
        EUR: "€",
    };
    const { toast } = useToast();
    useEffect(() => {
        if (!isFetching && pkg) {
            if (pkg.code === "FREE") {
                toast({
                    title: `Free Plan`,
                    description: `Free package is already in use`,
                    variant: "error",
                });
                navigate("/client/packages");
            }
        }
    }, [isFetching, pkg, navigate]);
    if (isFetching || !pkg) {
        return _jsx("div", { className: "text-center py-10", children: "Loading..." });
    }
    const monthly = pkg.prices[currency];
    const yearly = Number((pkg.prices[currency] * 12).toFixed(2));
    const pricing = { monthly, yearly };
    const packageNote = {
        title: pkg.code,
        description: pkg.notes,
    };
    const discount = ((pricing.monthly * 12 - pricing.yearly) / (pricing.monthly * 12) * 100).toFixed(0);
    return (_jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-900", children: [_jsx("div", { className: "flex justify-end p-4", children: _jsxs(Button, { variant: "outline-success", size: "sm", onClick: () => navigate("/client/packages"), children: [_jsx(ArrowLeftIcon, { className: "h-4 w-4 me-1" }), "   Back"] }) }), _jsxs("div", { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl", children: "Pick Your Plan" }), _jsx("p", { className: "mt-4 text-lg text-gray-600 dark:text-gray-300", children: "Choose the perfect billing cycle for your needs" })] }), _jsx("div", { className: "mt-12 flex justify-center", children: _jsxs("div", { className: "relative bg-gray-200 dark:bg-gray-800 rounded-lg p-0.5 flex", children: [_jsx("button", { onClick: () => setSelectedInterval('monthly'), className: selectedInterval === 'monthly'
                                        ? 'bg-green-600 text-white relative py-2 px-6 rounded-md text-sm font-medium'
                                        : 'text-gray-700 dark:text-gray-300 relative py-2 px-6 rounded-md text-sm font-medium', children: "Monthly billing" }), _jsx("button", { onClick: () => setSelectedInterval('yearly'), className: selectedInterval === 'yearly'
                                        ? 'bg-green-600 text-white ml-0.5 relative py-2 px-6 rounded-md text-sm font-medium'
                                        : 'text-gray-700 dark:text-gray-300 ml-0.5 relative py-2 px-6 rounded-md text-sm font-medium', children: "Annual billing" })] }) }), _jsxs("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "px-6 py-8", children: [_jsx("h4", { className: "text-xl font-medium text-gray-900 dark:text-white mb-6", children: "Select Payment Method" }), _jsx("div", { className: "space-y-4", children: ['paypal', 'razorpay', 'stripe'].map((method) => (_jsxs("button", { onClick: () => setSelectedPaymentMethod(method), className: selectedPaymentMethod === method
                                                    ? 'w-full flex items-center justify-between px-4 py-3 border border-green-600 bg-green-50 dark:bg-green-900 rounded-lg'
                                                    : 'w-full flex items-center justify-between px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg', children: [_jsx("span", { className: "capitalize text-gray-900 dark:text-white", children: method }), selectedPaymentMethod === method && (_jsx("span", { className: "text-green-600 dark:text-green-400", children: "\u2714" }))] }, method))) }), _jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200 dark:border-gray-700", children: [_jsxs("div", { className: "flex justify-between text-lg font-medium", children: [_jsx("span", { className: "text-gray-900 dark:text-white", children: "Total" }), _jsxs("span", { className: "text-gray-900 dark:text-white", children: [currencySymbols[currency], selectedInterval === 'monthly' ? pricing.monthly : pricing.yearly, _jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: ["/", selectedInterval === 'monthly' ? 'month' : 'year'] })] })] }), _jsx("button", { onClick: () => {
                                                        if (selectedPaymentMethod) {
                                                            navigate('/client/process-payment', {
                                                                state: {
                                                                    paymentMethod: {
                                                                        id: pkg._id,
                                                                        type: selectedPaymentMethod,
                                                                        planInterval: selectedInterval,
                                                                        amount: selectedInterval === 'monthly' ? pricing.monthly : pricing.yearly,
                                                                        currency,
                                                                        packageTitle: pkg.code,
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }, disabled: !selectedPaymentMethod, className: "mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:opacity-50", children: "Proceed to Payment" })] })] }) }), _jsx("div", { children: _jsx(PaymentSummary, { packageTitle: pkg.code, packageDescription: pkg.shortDescription, amount: selectedInterval === 'monthly' ? pricing.monthly : pricing.yearly, interval: selectedInterval, currency: currencySymbols[currency], features: pkg.features }) })] }), _jsx("div", { className: "mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "px-6 py-8", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 dark:text-white mb-4", children: " Important Information " }), _jsx("div", { className: "prose prose-green dark:prose-invert max-w-none", children: _jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [" By subscribing to our ", packageNote.title, ", ", packageNote.description, ". "] }) })] }) })] })] }));
};
export default PlanSelection;
