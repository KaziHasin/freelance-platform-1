import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextInput } from '@/components/forms/inputs/TextInput';
import { useCheckoutPaymentMutation } from '@/store/slices/PaymentSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { getClient } from "@/lib/auth";
import { useForm } from "react-hook-form";
import Button from '@/components/ui/Button';
const ProcessPayment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const paymentMethod = location.state?.paymentMethod;
    const currencySymbols = {
        INR: "₹",
        USD: "$",
        EUR: "€",
    };
    const [checkoutPayment, { isLoading }] = useCheckoutPaymentMutation();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        try {
            const result = await checkoutPayment({
                paymentMethod: paymentMethod.type,
                planInterval: paymentMethod.planInterval,
                amount: paymentMethod.amount,
                currency: paymentMethod.currency,
                clientId: getClient().id,
                packageId: paymentMethod.id,
                packageTitle: paymentMethod.packageTitle,
                paymentDetails: data,
            }).unwrap();
            if (result.status === "success") {
                navigate('/client/payment-result', {
                    state: {
                        paymentResult: {
                            status: "success",
                            transactionId: result.transactionId,
                            amount: paymentMethod.amount,
                            packageTitle: paymentMethod.packageTitle,
                            planInterval: paymentMethod.planInterval,
                        },
                    },
                });
            }
            else {
                throw new Error(result.message || "Payment failed");
            }
        }
        catch (error) {
            navigate('/client/payment-result', {
                state: {
                    paymentResult: {
                        status: "failure",
                        message: error instanceof Error ? error.message : "Payment processing failed",
                        amount: paymentMethod.amount,
                        packageTitle: paymentMethod.packageTitle,
                        planInterval: paymentMethod.planInterval,
                    },
                },
            });
        }
    };
    if (!paymentMethod) {
        return (_jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center", children: _jsx("div", { className: "text-center text-gray-600 dark:text-gray-300", children: "No payment information found. Please select a plan first." }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-12", children: _jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-3xl font-extrabold text-gray-900 dark:text-white", children: "Complete Your Payment" }), _jsxs("p", { className: "mt-2 text-lg text-gray-600 dark:text-gray-300", children: ["Secure payment processing for your ", paymentMethod.packageTitle] })] }), _jsxs("div", { className: "bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden", children: [_jsx("div", { className: "bg-green-600 dark:bg-green-700 px-6 py-4", children: _jsxs("div", { className: "flex justify-between items-center text-white", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm opacity-90", children: "Total Amount" }), _jsxs("p", { className: "text-2xl font-bold", children: [currencySymbols[paymentMethod.currency], paymentMethod.amount] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-sm opacity-90", children: "Plan Type" }), _jsx("p", { className: "font-semibold capitalize", children: paymentMethod.planInterval })] })] }) }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "px-6 py-8 space-y-6", children: [_jsxs("div", { children: [_jsx(TextInput, { label: "Card Number", id: "cardNumber", placeholder: "1234 5678 9012 3456", maxLength: 19, ...register("cardNumber", {
                                                required: "Card number is required",
                                                pattern: {
                                                    value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                                                    message: "Enter a valid card number",
                                                },
                                            }) }), errors.cardNumber && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.cardNumber.message }))] }), _jsxs("div", { children: [_jsx(TextInput, { label: "Name on Card", id: "name", placeholder: "John Doe", ...register("name", {
                                                required: "Name is required",
                                                minLength: { value: 2, message: "Name must be at least 2 characters" },
                                            }) }), errors.name && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name.message }))] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(TextInput, { label: "Expiry Date", id: "expiryDate", placeholder: "MM/YY", maxLength: 5, ...register("expiryDate", {
                                                        required: "Expiry date is required",
                                                        pattern: {
                                                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                                            message: "Enter a valid expiry date (MM/YY)",
                                                        },
                                                    }) }), errors.expiryDate && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.expiryDate.message }))] }), _jsxs("div", { children: [_jsx(TextInput, { label: "CVV", id: "cvv", placeholder: "123", maxLength: 4, ...register("cvv", {
                                                        required: "CVV is required",
                                                        pattern: {
                                                            value: /^[0-9]{3,4}$/,
                                                            message: "Enter a valid CVV",
                                                        },
                                                    }) }), errors.cvv && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.cvv.message }))] })] }), _jsx("div", { className: "mt-6", children: _jsx(Button, { variant: 'success', size: 'lg', isLoading: isLoading, fullWidth: true, type: "submit", children: " Pay Now" }) })] })] })] }) }));
};
export default ProcessPayment;
