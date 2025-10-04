import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CodeBracketIcon, PaintBrushIcon, GlobeAltIcon, ChartBarIcon, DevicePhoneMobileIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
const categories = [
    {
        icon: CodeBracketIcon,
        title: "Web Development",
        description: "WordPress, PHP, HTML, CSS",
        count: 12350
    },
    {
        icon: PaintBrushIcon,
        title: "Design & Creative",
        description: "Graphic Design, Illustration",
        count: 8420
    },
    {
        icon: GlobeAltIcon,
        title: "WordPress",
        description: "Themes, Plugins, Customization",
        count: 6240
    },
    {
        icon: ChartBarIcon,
        title: "Digital Marketing",
        description: "SEO, Social Media, Analytics",
        count: 5180
    },
    {
        icon: DevicePhoneMobileIcon,
        title: "Mobile Development",
        description: "iOS, Android, Cross-platform",
        count: 4320
    },
    {
        icon: BriefcaseIcon,
        title: "Business",
        description: "Virtual Assistant, Data Entry",
        count: 3890
    }
];
const PopularCategories = () => {
    return (_jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Popular Professional Services" }), _jsx("p", { className: "text-gray-600", children: "Get inspired by these trending services" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: categories.map((category, index) => (_jsx("div", { className: "p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "p-3 bg-green-100 rounded-lg", children: _jsx(category.icon, { className: "w-6 h-6 text-green-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: category.title }), _jsx("p", { className: "text-gray-600 mb-2", children: category.description }), _jsxs("span", { className: "text-sm text-gray-500", children: [category.count.toLocaleString(), " jobs"] })] })] }) }, index))) })] }) }));
};
export default PopularCategories;
