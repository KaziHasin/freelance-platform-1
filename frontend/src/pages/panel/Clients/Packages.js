import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useGetPackagesQuery } from "@/store/slices/PackageSlice";
import { useNavigate } from "react-router-dom";
const Packages = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [currency, setCurrency] = useState("INR");
    const { data, isLoading, isError } = useGetPackagesQuery({ page, limit });
    const codeOrder = ["FREE", "BASIC", "STANDARD", "PREMIUM"];
    const navigate = useNavigate();
    const currencySymbols = {
        INR: "₹",
        USD: "$",
        EUR: "€",
    };
    const tiers = useMemo(() => {
        if (!data?.items)
            return [];
        return [...data.items]
            .sort((a, b) => codeOrder.indexOf(a.code) - codeOrder.indexOf(b.code))
            .map((pkg) => {
            const features = [
                `Projects per month: ${pkg.projectsPerMonth ?? "Unlimited"}`,
                `Contact clicks per project: ${pkg.contactClicksPerProject ?? "Unlimited"}`,
                ...(pkg.features || []),
            ];
            const cta = pkg.code === "FREE"
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
    if (isLoading)
        return _jsx("div", { className: "text-center py-20", children: "Loading..." });
    if (isError)
        return _jsx("div", { className: "text-center py-20 text-red-500", children: "Failed to load packages" });
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "mx-auto", children: [_jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl", children: "Choose Your Plan" }), _jsx("p", { className: "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300", children: "Select the perfect package for your business needs" })] }), _jsx("div", { className: "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4", children: tiers.map((tier) => {
                        const displayedPrice = tier.prices?.[currency] ?? tier.prices?.INR ?? 0;
                        return (_jsxs("div", { className: `relative flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden ${tier.mostPopular
                                ? "ring-2 ring-green-600 dark:ring-green-500/60"
                                : ""}`, children: [tier.badge && (_jsx("div", { className: `absolute right-6 top-6 rounded-full px-3 py-1.5 text-xs font-medium ${tier.mostPopular
                                        ? "bg-green-50 text-green-700 dark:bg-green-900/60 dark:text-green-200"
                                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"}`, children: tier.badge })), _jsxs("div", { className: "p-6 md:p-8 flex-1 flex flex-col", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold leading-8 text-gray-900 dark:text-white", children: tier.name }), _jsx("p", { className: "mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300", children: tier.description }), _jsxs("div", { className: "mt-6 flex items-baseline gap-x-2", children: [_jsxs("span", { className: "text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white", children: [currencySymbols[currency], displayedPrice] }), _jsx("span", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400", children: "/month" })] }), _jsx("div", { className: "flex items-center gap-2 mt-2", children: ["INR", "USD", "EUR"].map((cur) => (_jsx("button", { onClick: () => setCurrency(cur), className: `px-2 py-1 rounded ${currency === cur ? "bg-green-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"}`, children: cur }, cur))) })] }), _jsx("div", { className: "mt-6", children: _jsx("button", { className: `w-full rounded-md px-4 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${tier.mostPopular
                                                    ? "bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600"
                                                    : "bg-gray-100 text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus-visible:outline-gray-600"}`, onClick: () => navigate(`/client/plan-selection/${tier.id}?currency=${currency}`), children: tier.cta }) }), _jsx("ul", { role: "list", className: "mt-6 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 flex-1", children: tier.features.map((feature, i) => (_jsxs("li", { className: "flex gap-x-3 items-start", children: [_jsx(CheckIcon, { className: "h-6 w-5 flex-none text-green-600 dark:text-green-400 mt-1", "aria-hidden": "true" }), _jsx("span", { className: "truncate", children: feature })] }, i))) })] }), _jsx("div", { className: "px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 text-xs text-gray-600 dark:text-gray-400", children: tier.footerText })] }, tier.code));
                    }) })] }) }));
};
export default Packages;
