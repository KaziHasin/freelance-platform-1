import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/images/hero-bg.png';

const Hero = () => {
    return (
        <div className="relative min-h-[100vh] sm:min-h-[80vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight">
                        Hire the best freelancers<br />
                        for any job, online.
                    </h1>

                    <ul className="space-y-4 text-lg mb-8">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            World's largest freelance marketplace
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Any job you can possibly think of
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Save up to 90% & get quotes for free
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Pay only when you're 100% happy
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            to="/signup"
                            className="px-6 sm:px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors text-center text-sm sm:text-base w-full sm:w-auto"
                        >
                            Hire a Freelancer
                        </Link>
                        <Link
                            to="/signup"
                            className="px-6 sm:px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-md border-2 border-white transition-colors text-center text-sm sm:text-base w-full sm:w-auto"
                        >
                            Earn Money Freelancing
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 right-6 text-white/80 text-xs sm:text-sm">
                This architectural design cost $500 USD and took 15 days
            </div>
        </div>
    );
};

export default Hero;