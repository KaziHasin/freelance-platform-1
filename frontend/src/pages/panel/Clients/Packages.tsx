import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
    {
        code: "FREE",
        name: "Free",
        badge: "STARTER",
        price: "0",
        description: "Perfect to get started and test the platform",
        features: [
            "Post up to 3 projects per month",
            "Basic project management tools",
            "Access to global freelancer network",
            "Standard support",
            "Project tracking",
            "1 active project at a time",
        ],
        cta: "Get Started",
        mostPopular: false,
    },
    {
        code: "BASIC",
        name: "Basic",
        badge: "",
        price: "499",
        description: "For solo freelancers & small teams",
        features: [
            "Everything in Free, plus:",
            "Post up to 10 projects per month",
            "Priority project placement",
            "Enhanced project management",
            "Email support",
            "Up to 3 active projects",
        ],
        cta: "Choose Basic",
        mostPopular: false,
    },
    {
        code: "STANDARD",
        name: "Standard",
        badge: "MOST POPULAR",
        price: "2,999",
        description: "Best for growing businesses",
        features: [
            "Everything in Basic, plus:",
            "Post unlimited projects",
            "Priority support",
            "Team collaboration tools",
            "Up to 10 active projects",
            "Custom project templates",
        ],
        cta: "Get Standard",
        mostPopular: true,
    },
    {
        code: "PREMIUM",
        name: "Premium",
        badge: "ENTERPRISE",
        price: "19,999",
        description: "Advanced features for large teams",
        features: [
            "Everything in Standard, plus:",
            "Unlimited active projects",
            "Dedicated account manager",
            "24/7 premium support",
            "Advanced analytics & reporting",
            "API & custom integrations",
            "White-label options",
        ],
        cta: "Contact Sales",
        mostPopular: false,
    },
];

const Packages: React.FC = () => {
    return (
        <div className="py-6 px-4 sm:px-6 lg:px-8">
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
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden ${tier.mostPopular ? "ring-2 ring-green-600 dark:ring-green-500/60" : ""
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
                                            ₹{tier.price}
                                        </span>
                                        <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                                            /month
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        className={`w-full rounded-md px-4 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${tier.mostPopular
                                            ? "bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600"
                                            : "bg-gray-100 text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus-visible:outline-gray-600"
                                            }`}
                                    >
                                        {tier.cta}
                                    </button>
                                </div>

                                <ul
                                    role="list"
                                    className="mt-6 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 flex-1"
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3 items-start">
                                            <CheckIcon
                                                className="h-6 w-5 flex-none text-green-600 dark:text-green-400 mt-1"
                                                aria-hidden="true"
                                            />
                                            <span className="truncate">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* small footer note if needed */}
                            <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 text-xs text-gray-600 dark:text-gray-400">
                                {tier.code === "FREE" ? (
                                    <span>Great for evaluation and personal use</span>
                                ) : tier.code === "PREMIUM" ? (
                                    <span>Custom billing & contract options available</span>
                                ) : (
                                    <span>30-day money-back guarantee</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
                        Frequently asked questions
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                        Have a different question? Reach out to our{" "}
                        <a href="#" className="font-semibold text-green-600 dark:text-green-400 hover:text-green-500">
                            support team
                        </a>{" "}
                        for more details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Packages;
