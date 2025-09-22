import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo-2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img className="h-16 w-20" src={logo} alt="Freelancer" />
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    {/* <div className="hidden md:flex items-center space-x-4">
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white px-3 py-2">
                                Hire freelancers
                                <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white px-3 py-2">
                                Find work
                                <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white px-3 py-2">
                                Solutions
                                <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div> */}

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/signin" className="text-gray-300 hover:text-white px-3 py-2">
                            Sign In
                        </Link>
                        <Link to="/signup" className="text-gray-300 hover:text-white px-3 py-2">
                            Sign Up
                        </Link>
                        <Link
                            to="/post-project"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                        >
                            Post a Project
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/hire" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                            Hire freelancers
                        </Link>
                        <Link to="/find-work" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                            Find work
                        </Link>
                        <Link to="/solutions" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                            Solutions
                        </Link>
                        <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                            Log In
                        </Link>
                        <Link to="/signup" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                            Sign Up
                        </Link>
                        <Link to="/post-project" className="block px-3 py-2 text-base font-medium bg-green-600 text-white hover:bg-green-700 rounded-md">
                            Post a Project
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;