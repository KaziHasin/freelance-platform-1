import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const steps = [
    {
        number: "01",
        title: "Post a Project",
        description: "Tell us what you need. Provide as many details as possible, but don't worry about getting it perfect."
    },
    {
        number: "02",
        title: "Get Proposals",
        description: "Receive proposals from experienced freelancers. Choose the best match for your project."
    },
    {
        number: "03",
        title: "Hire the Best",
        description: "Choose the offer that's right for you and start the project. Pay securely through our platform."
    },
    {
        number: "04",
        title: "Get Work Done",
        description: "Work with your freelancer to complete the project. Only release payment when you're 100% satisfied."
    }
];
const HowItWorks = () => {
    return (_jsx("section", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "How It Works" }), _jsx("p", { className: "text-gray-600", children: "Complete your project in 4 simple steps" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: steps.map((step, index) => (_jsxs("div", { className: "relative group", children: [index < steps.length - 1 && (_jsx("div", { className: "hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 -z-10", children: _jsx("div", { className: "h-full bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" }) })), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300", children: [_jsx("div", { className: "text-3xl font-bold text-green-500 mb-4", children: step.number }), _jsx("h3", { className: "text-xl font-semibold mb-3", children: step.title }), _jsx("p", { className: "text-gray-600", children: step.description })] })] }, index))) })] }) }));
};
export default HowItWorks;
