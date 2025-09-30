import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PaymentResult {
    status: 'success' | 'failure';
    message?: string;
    transactionId?: string;
    amount: number;
    packageTitle: string;
    planInterval: 'monthly' | 'yearly';
}

const PaymentResult: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const paymentResult = location.state?.paymentResult as PaymentResult;

    useEffect(() => {
        // If no payment result is present, redirect to packages
        if (!paymentResult) {
            navigate('/client/packages');
        }
    }, [paymentResult, navigate]);

    if (!paymentResult) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full">
                {/* Success State */}
                {paymentResult.status === 'success' && (
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900">
                            <svg
                                className="h-12 w-12 text-green-600 dark:text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 6L9 17l-5-5m36-3l-11 11-5-5M43 42L32 31l-5 5M4 42l11-11 5 5"
                                />
                            </svg>
                        </div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                            Payment Successful!
                        </h2>
                        <div className="mt-4 bg-white dark:bg-gray-800 shadow rounded-lg px-6 py-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Transaction ID</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {paymentResult.transactionId}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Package</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {paymentResult.packageTitle}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Plan</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                                        {paymentResult.planInterval}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Amount Paid</span>
                                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                        ${paymentResult.amount}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                We've sent a confirmation email with all the details to your registered email address.
                            </p>
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={() => navigate('/client')}
                                    className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900"
                                >
                                    Go to Dashboard
                                </button>
                                <button
                                    onClick={() => navigate('/client/packages')}
                                    className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900"
                                >
                                    View Other Packages
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Failure State */}
                {paymentResult.status === 'failure' && (
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 dark:bg-red-900">
                            <svg
                                className="h-12 w-12 text-red-600 dark:text-red-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                            Payment Failed
                        </h2>
                        <div className="mt-4 bg-white dark:bg-gray-800 shadow rounded-lg px-6 py-8">
                            <div className="space-y-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {paymentResult.message || 'An error occurred while processing your payment. Please try again.'}
                                </p>
                                <div className="bg-red-50 dark:bg-red-900/30 rounded-md p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-5 w-5 text-red-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                                                Common reasons for payment failure:
                                            </h3>
                                            <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Insufficient funds</li>
                                                    <li>Invalid card details</li>
                                                    <li>Card expired</li>
                                                    <li>Bank declined transaction</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={() => navigate(-1)} // Go back to payment page
                                    className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => navigate('/client/packages')}
                                    className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900"
                                >
                                    View Packages
                                </button>
                                <button
                                    onClick={() => window.location.href = 'mailto:support@example.com'}
                                    className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900"
                                >
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentResult;