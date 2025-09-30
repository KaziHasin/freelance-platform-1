import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onMenuClick: () => void;
}

const DeveloperHeader: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="sticky top-0 z-40 flex items-center h-14 bg-[#001e2b] text-white border-b border-[#0c2a3a]">
            <div className="flex items-center justify-between flex-1 px-4">
                {/* Left section */}
                <div className="flex items-center">
                    <button
                        type="button"
                        className="lg:hidden -ml-2 p-2 text-white hover:text-green-400"
                        onClick={onMenuClick}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center ml-4">
                        <Link to="/developer/projects" className="text-sm font-medium hover:text-green-400 px-3 py-2">
                            Browse Projects
                        </Link>
                        <Link to="/developer/my-projects" className="text-sm font-medium hover:text-green-400 px-3 py-2">
                            My Work
                        </Link>
                    </div>
                </div>

                {/* Right section */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-white hover:text-green-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <button className="p-2 text-white hover:text-green-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </button>

                    <div className="relative ml-3">
                        <div className="flex items-center space-x-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                ₹0.00
                            </span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DeveloperHeader;