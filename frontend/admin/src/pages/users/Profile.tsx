import React from 'react';
import { UserCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const UserProfile = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                {/* Profile Header */}
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="User"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                John Doe
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Senior Software Engineer
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Personal Information */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                Personal Information
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600 dark:text-gray-300">john.doe@example.com</span>
                                </div>
                                <div className="flex items-center">
                                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Company Information */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                Company Information
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <BuildingOfficeIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600 dark:text-gray-300">Tech Corp Inc.</span>
                                </div>
                                <div className="flex items-center">
                                    <UserCircleIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span className="text-gray-600 dark:text-gray-300">Engineering Department</span>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 sm:col-span-2">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 sm:col-span-2">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                Recent Activity
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { date: '2024-03-15', action: 'Completed project milestone', type: 'success' },
                                    { date: '2024-03-10', action: 'Attended team meeting', type: 'info' },
                                    { date: '2024-03-05', action: 'Updated documentation', type: 'info' },
                                ].map((activity, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className={`h-2 w-2 rounded-full mr-3 ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                                            }`} />
                                        <span className="text-sm text-gray-600 dark:text-gray-300">
                                            {activity.date} - {activity.action}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Actions */}
                <div className="px-4 py-4 sm:px-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Edit Profile
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile; 