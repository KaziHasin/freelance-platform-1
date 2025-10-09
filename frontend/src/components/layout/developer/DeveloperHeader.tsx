import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { getUser } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
    onMenuClick: () => void;
}

const DeveloperHeader: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const user = getUser();
    const { logout } = useAuth();
    const navigate = useNavigate();


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

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
                            {user?.profileImage ? (
                                <img className="h-8 w-8 rounded-full" src={user.profileImage} alt={user.name || 'User'} />
                            ) : (
                                <svg className="w-7 h-7 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            )}
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white text-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="px-4 py-3 border-b border-gray-200">
                                    <p className="text-sm font-medium">{user?.name || 'User Name'}</p>
                                    <p className="text-xs text-gray-500">{user?.email || 'user@example.com'}</p>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/developer/profile"
                                                className={`${active ? 'bg-gray-100' : ''
                                                    } block px-4 py-2 text-sm`}
                                            >
                                                Profile
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center" onClick={async () => {
                                            await logout();
                                            navigate('/signin');
                                        }}>
                                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                                            Logout
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default DeveloperHeader;
