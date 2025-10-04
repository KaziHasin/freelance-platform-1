import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShieldCheckIcon, StarIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
const features = [
    {
        title: "Safe and Secure",
        description: "Payment is released only when you're completely satisfied with the work.",
        icon: _jsx(ShieldCheckIcon, { className: "w-6 h-6" })
    },
    {
        title: "Proof of Quality",
        description: "Handpicked professionals and thorough vetting process ensures top quality.",
        icon: _jsx(StarIcon, { className: "w-6 h-6" })
    },
    {
        title: "24/7 Support",
        description: "Round the clock customer service to assist you anytime.",
        icon: _jsx(ChatBubbleBottomCenterTextIcon, { className: "w-6 h-6" })
    },
    {
        title: "Global Marketplace",
        description: "Access to a diverse pool of skilled professionals worldwide.",
        icon: _jsx(GlobeAltIcon, { className: "w-6 h-6" })
    }
];
const WhyChooseUs = () => {
    return (_jsx("section", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Why Choose Our Platform" }), _jsx("p", { className: "text-gray-600", children: "The benefits of working with our global community" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300", children: [_jsx("div", { className: "text-green-600 mb-4", children: feature.icon }), _jsx("h3", { className: "text-xl font-semibold mb-3", children: feature.title }), _jsx("p", { className: "text-gray-600", children: feature.description })] }, index))) })] }) }));
};
export default WhyChooseUs;
