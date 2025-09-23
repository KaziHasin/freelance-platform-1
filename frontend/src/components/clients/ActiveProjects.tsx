import React from 'react';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

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

const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
        {/* Header */}
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Freelancer: {project.freelancer}
                </p>
            </div>
            <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}
            >
                {project.status}
            </span>
        </div>

        {/* Progress */}
        <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progress</span>
                <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                />
            </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
                <ClockIcon className="h-4 w-4 mr-1" />
                {project.timeline}
            </div>
            <div className="text-green-600 dark:text-green-400 font-medium">
                {project.budget}
            </div>
        </div>
    </div>
);

const ActiveProjects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ActiveProjects;