import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
const TopFreelancers = () => {
    const freelancers = [
        {
            id: 1,
            name: 'Sarah Wilson',
            role: 'UI/UX Designer',
            rating: 4.9,
            projects: 15,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            hourlyRate: '$45/hr'
        },
        {
            id: 2,
            name: 'John Doe',
            role: 'Full Stack Developer',
            rating: 4.8,
            projects: 23,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
            hourlyRate: '$65/hr'
        },
        {
            id: 3,
            name: 'Emily Brown',
            role: 'Content Writer',
            rating: 4.7,
            projects: 18,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
            hourlyRate: '$35/hr'
        }
    ];
    return (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow transition-colors", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Top Freelancers" }), _jsx("div", { className: "mt-6 flow-root", children: _jsx("ul", { className: "-my-5 divide-y divide-gray-200 dark:divide-gray-700", children: freelancers.map((freelancer) => (_jsx("li", { className: "py-4", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("img", { className: "h-12 w-12 rounded-full object-cover", src: freelancer.image, alt: freelancer.name }) }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-white truncate", children: freelancer.name }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 truncate", children: freelancer.role }), _jsxs("div", { className: "flex items-center mt-1", children: [_jsx(StarIcon, { className: "h-4 w-4 text-yellow-400" }), _jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400 ml-1", children: freelancer.rating }), _jsx("span", { className: "mx-2 text-gray-300 dark:text-gray-600", children: "\u00B7" }), _jsx(UserGroupIcon, { className: "h-4 w-4 text-gray-400 dark:text-gray-500" }), _jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 ml-1", children: [freelancer.projects, " projects"] })] })] }), _jsx("div", { className: "flex-shrink-0 text-right", children: _jsx("p", { className: "text-sm font-medium text-green-600 dark:text-green-400", children: freelancer.hourlyRate }) })] }) }, freelancer.id))) }) }), _jsx("div", { className: "mt-6", children: _jsx("button", { type: "button", className: "w-full flex justify-center items-center px-4 py-2 \r\n                                   border border-gray-300 dark:border-gray-600 \r\n                                   shadow-sm text-sm font-medium \r\n                                   rounded-md text-gray-700 dark:text-gray-200 \r\n                                   bg-white dark:bg-gray-700 \r\n                                   hover:bg-gray-50 dark:hover:bg-gray-600 \r\n                                   transition-colors", children: "View all freelancers" }) })] }) }));
};
export default TopFreelancers;
