import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ClockIcon } from '@heroicons/react/24/outline';
const projects = [
    {
        id: 1,
        title: 'E-commerce Website Development',
        budget: '$2,500',
        status: 'In Progress',
        timeline: '2 weeks left',
        freelancer: 'John Doe',
        progress: 65,
    },
    {
        id: 2,
        title: 'Mobile App UI Design',
        budget: '$1,800',
        status: 'In Progress',
        timeline: '1 week left',
        freelancer: 'Sarah Wilson',
        progress: 80,
    },
    {
        id: 3,
        title: 'SEO Optimization',
        budget: '$800',
        status: 'Completed',
        timeline: 'Completed',
        freelancer: 'Mike Johnson',
        progress: 100,
    },
    {
        id: 4,
        title: 'Website Content Writing',
        budget: '$500',
        status: 'In Progress',
        timeline: '3 days left',
        freelancer: 'Emily Brown',
        progress: 90,
    },
];
const ProjectCard = ({ project }) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: project.title }), _jsxs("p", { className: "text-gray-500 dark:text-gray-400 mt-1", children: ["Freelancer: ", project.freelancer] })] }), _jsx("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${project.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`, children: project.status })] }), _jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2", children: [_jsx("span", { children: "Progress" }), _jsxs("span", { children: [project.progress, "%"] })] }), _jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2", children: _jsx("div", { className: "bg-green-600 h-2 rounded-full", style: { width: `${project.progress}%` } }) })] }), _jsxs("div", { className: "mt-4 flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center text-gray-500 dark:text-gray-400", children: [_jsx(ClockIcon, { className: "h-4 w-4 mr-1" }), project.timeline] }), _jsx("div", { className: "text-green-600 dark:text-green-400 font-medium", children: project.budget })] })] }));
const ActiveProjects = () => {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: projects.map(project => (_jsx(ProjectCard, { project: project }, project.id))) }));
};
export default ActiveProjects;
