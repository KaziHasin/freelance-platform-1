import { TextInput } from '@/components/forms/inputs/TextInput';
import { useCheckoutPaymentMutation } from '@/store/slices/PaymentSlice';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from "@/lib/auth";
import { useForm } from "react-hook-form";
import Button from '@/components/ui/Button';

interface PaymentDetails {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    name: string;
}

interface PaymentMethod {
    id: string;
    type: 'paypal' | 'razorpay' | 'stripe';
    planInterval: 'monthly' | 'yearly';
    amount: number;
    currency: string;
    packageTitle: string;
}

const ProcessPayment: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const paymentMethod = location.state?.paymentMethod as PaymentMethod;

    const currencySymbols: Record<string, string> = {
        INR: "₹",
        USD: "$",
        EUR: "€",
    };

    const [checkoutPayment, { isLoading }] = useCheckoutPaymentMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PaymentDetails>();

    const onSubmit = async (data: PaymentDetails) => {
        try {

            const result = await checkoutPayment({
                paymentMethod: paymentMethod.type,
                planInterval: paymentMethod.planInterval,
                amount: paymentMethod.amount,
                currency: paymentMethod.currency,
                clientId: getUser().id,
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
            } else {
                throw new Error(result.message || "Payment failed");
            }
        } catch (error) {
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
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center text-gray-600 dark:text-gray-300">
                    No payment information found. Please select a plan first.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Complete Your Payment
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Secure payment processing for your {paymentMethod.packageTitle}
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                    {/* Order Summary */}
                    <div className="bg-green-600 dark:bg-green-700 px-6 py-4">
                        <div className="flex justify-between items-center text-white">
                            <div>
                                <p className="text-sm opacity-90">Total Amount</p>
                                <p className="text-2xl font-bold">
                                    {currencySymbols[paymentMethod.currency]}{paymentMethod.amount}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm opacity-90">Plan Type</p>
                                <p className="font-semibold capitalize">{paymentMethod.planInterval}</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 space-y-6">
                        {/* Card Number */}
                        <div>
                            <TextInput
                                label="Card Number"
                                id="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                maxLength={19}
                                {...register("cardNumber", {
                                    required: "Card number is required",
                                    pattern: {
                                        value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                                        message: "Enter a valid card number",
                                    },
                                })}
                            />
                            {errors.cardNumber && (
                                <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
                            )}
                        </div>

                        {/* Name on Card */}
                        <div>
                            <TextInput
                                label="Name on Card"
                                id="name"
                                placeholder="John Doe"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                                })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Expiry & CVV */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <TextInput
                                    label="Expiry Date"
                                    id="expiryDate"
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    {...register("expiryDate", {
                                        required: "Expiry date is required",
                                        pattern: {
                                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                            message: "Enter a valid expiry date (MM/YY)",
                                        },
                                    })}
                                />
                                {errors.expiryDate && (
                                    <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
                                )}
                            </div>
                            <div>
                                <TextInput
                                    label="CVV"
                                    id="cvv"
                                    placeholder="123"
                                    maxLength={4}
                                    {...register("cvv", {
                                        required: "CVV is required",
                                        pattern: {
                                            value: /^[0-9]{3,4}$/,
                                            message: "Enter a valid CVV",
                                        },
                                    })}
                                />
                                {errors.cvv && (
                                    <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <Button variant='success' size='lg' isLoading={isLoading} fullWidth type="submit"> Pay Now</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProcessPayment;
