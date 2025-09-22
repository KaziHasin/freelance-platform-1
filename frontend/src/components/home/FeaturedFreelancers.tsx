import React from 'react';
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
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Featured Freelancers</h2>
                        <p className="text-gray-600">Hire the top freelancers in their field</p>
                    </div>
                    <Link
                        to="/freelancers"
                        className="text-green-600 hover:text-green-700 font-semibold"
                    >
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {freelancers.map((freelancer) => (
                        <div
                            key={freelancer.id}
                            className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={freelancer.avatar}
                                        alt={freelancer.name}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    {freelancer.verified && (
                                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                                            Verified
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{freelancer.name}</h3>
                                <p className="text-gray-600 mb-3">{freelancer.title}</p>

                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        <span className="text-yellow-400">★</span>
                                        <span className="ml-1 font-medium">{freelancer.rating}</span>
                                    </div>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <span className="text-gray-600">{freelancer.reviews} reviews</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {freelancer.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t">
                                    <span className="text-gray-600">Starting at</span>
                                    <span className="text-xl font-bold text-gray-900">${freelancer.hourlyRate}/hr</span>
                                </div>
                            </div>

                            <Link
                                to={`/freelancers/${freelancer.id}`}
                                className="block text-center bg-gray-50 py-3 border-t text-green-600 hover:text-green-700 font-semibold transition-colors"
                            >
                                View Profile
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedFreelancers;