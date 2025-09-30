import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    // Example data - would come from API
    const stats = {
        activeProjects: 3,
        completedProjects: 28,
        rating: 4.8,
        earnings: 12580,
        availableProjects: 6,
        level: 'EXPERT'
    };

    const activeProjects = [
        {
            id: 1,
            title: 'E-commerce Platform Development',
            client: 'TechCorp Inc.',
            deadline: '2025-10-15',
            progress: 75,
        },
        // Add more projects...
    ];

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-[#001e2b] to-[#004d40] rounded-lg p-6 sm:p-8 border border-[#0c2a3a] mt-2">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-bold text-white sm:text-3xl">
                        Welcome back, Developer!
                    </h1>
                    <p className="mt-2 text-purple-100">
                        You have {stats.activeProjects} active projects and {stats.availableProjects} new
                        projects matching your skills.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Active Projects */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                        Active Projects
                                    </dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            {stats.activeProjects}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3">
                        <Link
                            to="/developer/projects"
                            className="text-sm font-medium text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300"
                        >
                            View all projects
                        </Link>
                    </div>
                </div>

                {/* Rating */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                        Rating
                                    </dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            {stats.rating}
                                        </div>
                                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                            / 5.0
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3">
                        <Link
                            to="/developer/reviews"
                            className="text-sm font-medium text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300"
                        >
                            View reviews
                        </Link>
                    </div>
                </div>

                {/* Earnings */}
                <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                        Total Earnings
                                    </dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            ${stats.earnings.toLocaleString()}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3">
                        <Link
                            to="/developer/earnings"
                            className="text-sm font-medium text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300"
                        >
                            View earnings
                        </Link>
                    </div>
                </div>
            </div>

            {/* Active Projects */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Active Projects
                    </h3>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {activeProjects.map((project) => (
                        <li key={project.id} className="px-6 py-5">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                                        {project.title}
                                    </h4>
                                    <div className="mt-1 flex items-center">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {project.client} • Due {new Date(project.deadline).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-6 flex-shrink-0">
                                    <div className="flex items-center">
                                        <div className="w-40 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className="bg-purple-600 h-2.5 rounded-full"
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                                            {project.progress}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Level and Skills */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Developer Level
                    </h3>
                </div>
                <div className="px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg className="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Current Level
                                </p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {stats.level}
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/developer/profile"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;