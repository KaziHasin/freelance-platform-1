import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import PaymentSummary from '../../../components/PaymentSummary';
import { useGetPackageQuery } from '@/store/slices/PackageSlice';
import Button from '@/components/ui/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/hooks/use-toast';

interface PlanPricing {
    monthly: number;
    yearly: number;
}

interface PackageNote {
    title: string;
    description: string;
}

const PlanSelection: React.FC = () => {
    const navigate = useNavigate();
    const [selectedInterval, setSelectedInterval] = useState<'monthly' | 'yearly'>('monthly');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'paypal' | 'razorpay' | 'stripe' | null>(null);
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const currency = (searchParams.get("currency") ?? "INR") as "INR" | "USD" | "EUR";

    const { data: pkg, isLoading: isFetching } = useGetPackageQuery(id!);

    const currencySymbols: Record<string, string> = {
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
        return <div className="text-center py-10">Loading...</div>;
    }

    const monthly = pkg.prices[currency];
    const yearly = Number((pkg.prices[currency] * 12).toFixed(2));
    const pricing: PlanPricing = { monthly, yearly };

    const packageNote: PackageNote = {
        title: pkg.code,
        description: pkg.notes,
    };

    const discount = ((pricing.monthly * 12 - pricing.yearly) / (pricing.monthly * 12) * 100).toFixed(0);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="flex justify-end p-4">
                <Button variant="outline-success" size="sm" onClick={() => navigate("/client/packages")}>
                    <ArrowLeftIcon className="h-4 w-4 me-1" />   Back
                </Button>
            </div>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Pick Your Plan
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Choose the perfect billing cycle for your needs
                    </p>
                </div>

                {/* Billing Interval Selection */}
                <div className="mt-12 flex justify-center">
                    <div className="relative bg-gray-200 dark:bg-gray-800 rounded-lg p-0.5 flex">
                        <button
                            onClick={() => setSelectedInterval('monthly')}
                            className={selectedInterval === 'monthly'
                                ? 'bg-green-600 text-white relative py-2 px-6 rounded-md text-sm font-medium'
                                : 'text-gray-700 dark:text-gray-300 relative py-2 px-6 rounded-md text-sm font-medium'}
                        >
                            Monthly billing
                        </button>
                        <button
                            onClick={() => setSelectedInterval('yearly')}
                            className={selectedInterval === 'yearly'
                                ? 'bg-green-600 text-white ml-0.5 relative py-2 px-6 rounded-md text-sm font-medium'
                                : 'text-gray-700 dark:text-gray-300 ml-0.5 relative py-2 px-6 rounded-md text-sm font-medium'}
                        >
                            Annual billing
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Payment Method Selection */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                                Select Payment Method
                            </h4>
                            <div className="space-y-4">
                                {['paypal', 'razorpay', 'stripe'].map((method) => (
                                    <button
                                        key={method}
                                        onClick={() => setSelectedPaymentMethod(method as any)}
                                        className={selectedPaymentMethod === method
                                            ? 'w-full flex items-center justify-between px-4 py-3 border border-green-600 bg-green-50 dark:bg-green-900 rounded-lg'
                                            : 'w-full flex items-center justify-between px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg'}
                                    >
                                        <span className="capitalize text-gray-900 dark:text-white">{method}</span>
                                        {selectedPaymentMethod === method && (
                                            <span className="text-green-600 dark:text-green-400">✔</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Total Summary */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex justify-between text-lg font-medium">
                                    <span className="text-gray-900 dark:text-white">Total</span>
                                    <span className="text-gray-900 dark:text-white">
                                        {currencySymbols[currency]}{selectedInterval === 'monthly' ? pricing.monthly : pricing.yearly}
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            /{selectedInterval === 'monthly' ? 'month' : 'year'}
                                        </span>
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
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
                                    }}
                                    disabled={!selectedPaymentMethod}
                                    className="mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Payment Summary */}
                    <div>
                        <PaymentSummary
                            packageTitle={pkg.code}
                            packageDescription={pkg.shortDescription}
                            amount={selectedInterval === 'monthly' ? pricing.monthly : pricing.yearly}
                            interval={selectedInterval}
                            currency={currencySymbols[currency]}
                            features={pkg.features}
                        />
                    </div>
                </div>
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4"> Important Information </h3>
                        <div className="prose prose-green dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300"> By subscribing to our {packageNote.title}, {packageNote.description}. </p>
                            {/* <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>• Subscription will automatically renew at the end of each billing cycle</li>
                                <li>• You can cancel or modify your subscription at any time</li>
                                <li>• All prices are in USD and include applicable taxes</li>
                                <li>• Enterprise customers may contact us for custom pricing options</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanSelection;