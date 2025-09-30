import React, { useState, useMemo } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useGetPackagesQuery } from "@/store/slices/PackageSlice";
import { useNavigate } from "react-router-dom";

const Packages: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [currency, setCurrency] = useState<"INR" | "USD" | "EUR">("INR");
    const { data, isLoading, isError } = useGetPackagesQuery({ page, limit });
    const codeOrder = ["FREE", "BASIC", "STANDARD", "PREMIUM"];
    const navigate = useNavigate();
    const currencySymbols: Record<string, string> = {
        INR: "₹",
        USD: "$",
        EUR: "€",
    };

    const tiers = useMemo(() => {

        if (!data?.items) return [];

        return [...data.items]
            .sort((a: any, b: any) => codeOrder.indexOf(a.code) - codeOrder.indexOf(b.code))
            .map((pkg: any) => {

                const features: string[] = [
                    `Projects per month: ${pkg.projectsPerMonth ?? "Unlimited"}`,
                    `Contact clicks per project: ${pkg.contactClicksPerProject ?? "Unlimited"}`,
                    ...(pkg.features || []),
                ];

                const cta =
                    pkg.code === "FREE"
                        ? "Get Started"
                        : pkg.code === "BASIC"
                            ? "Choose Basic"
                            : pkg.code === "STANDARD"
                                ? "Get Standard"
                                : "Contact Sales";

                return {
                    id: pkg._id,
                    code: pkg.code,
                    name: pkg.code.charAt(0) + pkg.code.slice(1).toLowerCase(),
                    badge: pkg.badge,
                    prices: {
                        INR: pkg.prices?.INR ?? 0,
                        USD: pkg.prices?.USD ?? 0,
                        EUR: pkg.prices?.EUR ?? 0,
                    },
                    description: pkg.shortDescription,
                    features,
                    cta,
                    mostPopular: pkg.code === "STANDARD",
                    footerText: pkg.footerText,
                };
            });
    }, [data]);


    if (isLoading) return <div className="text-center py-20">Loading...</div>;
    if (isError) return <div className="text-center py-20 text-red-500">Failed to load packages</div>;

    return (
        <div className="space-y-6">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Choose Your Plan
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Select the perfect package for your business needs
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {tiers.map((tier) => {
                        const displayedPrice = tier.prices?.[currency] ?? tier.prices?.INR ?? 0;

                        return (
                            <div
                                key={tier.code}
                                className={`relative flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden ${tier.mostPopular
                                    ? "ring-2 ring-green-600 dark:ring-green-500/60"
                                    : ""
                                    }`}
                            >
                                {tier.badge && (
                                    <div
                                        className={`absolute right-6 top-6 rounded-full px-3 py-1.5 text-xs font-medium ${tier.mostPopular
                                            ? "bg-green-50 text-green-700 dark:bg-green-900/60 dark:text-green-200"
                                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                                            }`}
                                    >
                                        {tier.badge}
                                    </div>
                                )}

                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <div>
                                        <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                                            {tier.name}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            {tier.description}
                                        </p>

                                        <div className="mt-6 flex items-baseline gap-x-2">
                                            <span className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {currencySymbols[currency]}{displayedPrice}
                                            </span>
                                            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                                                /month
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            {["INR", "USD", "EUR"].map((cur) => (
                                                <button
                                                    key={cur}
                                                    onClick={() => setCurrency(cur as "INR" | "USD" | "EUR")}
                                                    className={`px-2 py-1 rounded ${currency === cur ? "bg-green-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"}`}
                                                >
                                                    {cur}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            className={`w-full rounded-md px-4 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${tier.mostPopular
                                                ? "bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600"
                                                : "bg-gray-100 text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus-visible:outline-gray-600"
                                                }`}
                                            onClick={() => navigate(`/client/plan-selection/${tier.id}?currency=${currency}`)}
                                        >
                                            {tier.cta}
                                        </button>
                                    </div>

                                    <ul
                                        role="list"
                                        className="mt-6 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 flex-1"
                                    >
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex gap-x-3 items-start">
                                                <CheckIcon
                                                    className="h-6 w-5 flex-none text-green-600 dark:text-green-400 mt-1"
                                                    aria-hidden="true"
                                                />
                                                <span className="truncate">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Footer */}
                                <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 text-xs text-gray-600 dark:text-gray-400">
                                    {tier.footerText}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Packages;
