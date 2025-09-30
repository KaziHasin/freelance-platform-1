import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DeveloperHeader from './DeveloperHeader';
import DeveloperSidebar from './DeveloperSidebar';

interface LayoutProps {
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen flex bg-gray-50">
            {/* Mobile sidebar */}
            <div className={`
        fixed inset-0 flex z-40 lg:hidden
        ${sidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `} role="dialog" aria-modal="true">
                {/* Overlay */}
                <div
                    className={`
            fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-linear duration-300
            ${sidebarOpen ? 'opacity-100' : 'opacity-0'}
          `}
                    aria-hidden="true"
                    onClick={() => setSidebarOpen(false)}
                />

                {/* Sidebar component */}
                <div className={`
          relative flex-1 flex flex-col max-w-xs w-full bg-[#001e2b] transition ease-in-out duration-300 transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <DeveloperSidebar />
                </div>
            </div>

            {/* Desktop sidebar */}
            <DeveloperSidebar />

            {/* Main content */}
            <div className="lg:pl-64 flex flex-col flex-1">
                <DeveloperHeader onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 pb-8">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;