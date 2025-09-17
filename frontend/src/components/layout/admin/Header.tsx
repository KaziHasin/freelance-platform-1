import { useState } from 'react';
import { Bars3Icon, BellIcon, Squares2X2Icon, UserCircleIcon, MoonIcon, GlobeAltIcon, BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { getUser } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <header className="w-full bg-white dark:bg-gray-800 shadow-sm relative">
            {/* Mobile Search Overlay */}
            {isMobileSearchOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-40">
                    <div className="bg-white dark:bg-gray-800 p-4 flex items-center shadow-md">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-300 mr-2" />
                        <input
                            type="text"
                            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            autoFocus
                        />
                        <button
                            onClick={() => setIsMobileSearchOpen(false)}
                            className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between h-16 px-4 lg:px-6">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={onMenuClick}
                        className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                    {/* Desktop Search */}
                    <div className="hidden sm:flex items-center ml-2">
                        <div className="relative">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                className="pl-10 pr-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Mobile Search Icon */}
                    <button
                        className="sm:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                        onClick={() => setIsMobileSearchOpen(true)}
                    >
                        <MagnifyingGlassIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsNotificationsOpen(!isNotificationsOpen);
                                setIsSettingsOpen(false);
                                setIsProfileOpen(false);
                            }}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none relative"
                        >
                            <BellIcon className="h-6 w-6" />
                            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Notifications Dropdown */}
                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    {/* Sample notifications */}
                                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <p className="text-sm text-gray-900 dark:text-white">New user registration</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                                    </div>
                                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <p className="text-sm text-gray-900 dark:text-white">System update completed</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* App Settings (Grid Icon) */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsSettingsOpen(!isSettingsOpen);
                                setIsNotificationsOpen(false);
                                setIsProfileOpen(false);
                            }}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                        >
                            <Squares2X2Icon className="h-6 w-6" />
                        </button>

                        {/* Settings Dropdown */}
                        {isSettingsOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">App Settings</h3>
                                </div>
                                <div className="py-2">
                                    <button
                                        onClick={toggleTheme}
                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                                    >
                                        <MoonIcon className="h-5 w-5 mr-2" />
                                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                                    </button>
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                                        <GlobeAltIcon className="h-5 w-5 mr-2" />
                                        Language Settings
                                    </button>
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                                        <BellAlertIcon className="h-5 w-5 mr-2" />
                                        Notification Settings
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile Box */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsProfileOpen(!isProfileOpen);
                                setIsSettingsOpen(false);
                                setIsNotificationsOpen(false);
                            }}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none flex items-center"
                        >
                            <UserCircleIcon className="h-7 w-7" />
                        </button>
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                                    <UserCircleIcon className="h-8 w-8 text-gray-500 dark:text-gray-300 mr-2" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{getUser()?.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{getUser()?.email}</p>
                                    </div>
                                </div>
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center" onClick={() => navigate('/users/profile')}>
                                    <UserCircleIcon className="h-5 w-5 mr-2" />
                                    Profile
                                </button>
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                                    <Bars3Icon className="h-5 w-5 mr-2" />
                                    My Dashboard
                                </button>
                                <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center" onClick={async () => {
                                    await logout();
                                    navigate('/admin/login');
                                }}>
                                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 