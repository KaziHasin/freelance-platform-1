import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024; // lg breakpoint
            setIsMobile(mobile);
            if (mobile) {
                setSidebarCollapsed(true);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarCollapsed(prev => !prev);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Mobile Overlay */}
            {isMobile && !sidebarCollapsed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarCollapsed(true)}
                />
            )}

            {/* Sidebar */}
            <div className={`${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'fixed inset-y-0 left-0 z-30'}`}>
                <Sidebar
                    collapsed={sidebarCollapsed}
                    isMobile={isMobile}
                    onClose={() => setSidebarCollapsed(true)}
                />
            </div>

            {/* Main Content Area */}
            <div className={`flex flex-col min-h-screen ${!isMobile && (sidebarCollapsed ? 'ml-20' : 'ml-64')}`}>
                {/* Header */}
                <Header onMenuClick={toggleSidebar} />

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-6">
                    {children || <Outlet />}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;