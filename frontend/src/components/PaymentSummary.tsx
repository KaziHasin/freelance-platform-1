import React from 'react';

interface PaymentSummaryProps {
    packageTitle: string;
    packageDescription: string;
    currency: string;
    amount: number;
    interval: 'monthly' | 'yearly';
    features?: string[];
    note?: string;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({
    packageTitle,
    packageDescription,
    currency,
    amount,
    interval,
    features,
    note
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {packageTitle}
                    </h3>
                    <div className="text-right">
                        <p className="text-4xl font-bold text-gray-900 dark:text-white">
                            {currency}{amount}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            per {interval === 'monthly' ? 'month' : 'year'}
                        </p>
                    </div>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {packageDescription}
                </p>

                {features && features.length > 0 && (
                    <div className="mt-6">
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg
                                        className="h-5 w-5 text-green-500 mt-1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {note && (
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                        <p className="text-sm text-green-700 dark:text-green-200">
                            {note}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentSummary;