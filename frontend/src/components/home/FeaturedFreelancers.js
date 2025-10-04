import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const freelancers = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Full Stack Developer",
        rating: 4.9,
        reviews: 183,
        hourlyRate: 45,
        avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
        skills: ["React", "Node.js", "MongoDB"],
        verified: true
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "UI/UX Designer",
        rating: 4.8,
        reviews: 129,
        hourlyRate: 55,
        avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
        skills: ["Figma", "Adobe XD", "UI Design"],
        verified: true
    },
    {
        id: 3,
        name: "Emily Brown",
        title: "Digital Marketing Expert",
        rating: 4.7,
        reviews: 95,
        hourlyRate: 40,
        avatar: "https://ui-avatars.com/api/?name=Emily+Brown&background=random",
        skills: ["SEO", "Content Marketing", "Analytics"],
        verified: true
    },
    {
        id: 4,
        name: "David Wilson",
        title: "Mobile App Developer",
        rating: 4.9,
        reviews: 156,
        hourlyRate: 50,
        avatar: "https://ui-avatars.com/api/?name=David+Wilson&background=random",
        skills: ["iOS", "Android", "React Native"],
        verified: true
    }
];
const FeaturedFreelancers = () => {
    return (_jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex justify-between items-end mb-12", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Featured Freelancers" }), _jsx("p", { className: "text-gray-600", children: "Hire the top freelancers in their field" })] }), _jsx(Link, { to: "/freelancers", className: "text-green-600 hover:text-green-700 font-semibold", children: "View All \u2192" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: freelancers.map((freelancer) => (_jsxs("div", { className: "bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300", children: [_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("img", { src: freelancer.avatar, alt: freelancer.name, className: "w-16 h-16 rounded-full" }), freelancer.verified && (_jsx("span", { className: "ml-2 bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full", children: "Verified" }))] }), _jsx("h3", { className: "text-xl font-semibold mb-1", children: freelancer.name }), _jsx("p", { className: "text-gray-600 mb-3", children: freelancer.title }), _jsxs("div", { className: "flex items-center mb-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsx("span", { className: "ml-1 font-medium", children: freelancer.rating })] }), _jsx("span", { className: "mx-2 text-gray-300", children: "|" }), _jsxs("span", { className: "text-gray-600", children: [freelancer.reviews, " reviews"] })] }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: freelancer.skills.map((skill, index) => (_jsx("span", { className: "bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full", children: skill }, index))) }), _jsxs("div", { className: "flex justify-between items-center pt-4 border-t", children: [_jsx("span", { className: "text-gray-600", children: "Starting at" }), _jsxs("span", { className: "text-xl font-bold text-gray-900", children: ["$", freelancer.hourlyRate, "/hr"] })] })] }), _jsx(Link, { to: `/freelancers/${freelancer.id}`, className: "block text-center bg-gray-50 py-3 border-t text-green-600 hover:text-green-700 font-semibold transition-colors", children: "View Profile" })] }, freelancer.id))) })] }) }));
};
export default FeaturedFreelancers;
