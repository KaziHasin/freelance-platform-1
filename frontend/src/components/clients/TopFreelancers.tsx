import React from 'react';
import { StarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

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

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Top Freelancers</h3>
                <div className="mt-6 flow-root">
                    <ul className="-my-5 divide-y divide-gray-200">
                        {freelancers.map((freelancer) => (
                            <li key={freelancer.id} className="py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={freelancer.image}
                                            alt={freelancer.name}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {freelancer.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">{freelancer.role}</p>
                                        <div className="flex items-center mt-1">
                                            <StarIcon className="h-4 w-4 text-yellow-400" />
                                            <span className="text-sm text-gray-500 ml-1">{freelancer.rating}</span>
                                            <span className="mx-2 text-gray-300">·</span>
                                            <UserGroupIcon className="h-4 w-4 text-gray-400" />
                                            <span className="text-sm text-gray-500 ml-1">{freelancer.projects} projects</span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 text-right">
                                        <p className="text-sm font-medium text-green-600">{freelancer.hourlyRate}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        View all freelancers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopFreelancers;