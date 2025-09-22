import React from 'react';
import HeaderLayout from '../HeaderLayout';

interface PageLayoutProps {
    title: string;
    breadcrumbs?: {
        label: string;
        path: string;
    }[];
    children: React.ReactNode;

}

const PageLayout: React.FC<PageLayoutProps> = ({
    title,
    breadcrumbs = [],
    children,
}) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header with Breadcrumbs and Title */}
            <HeaderLayout
                title={title}
                breadcrumbs={breadcrumbs}
            />
            {/* Main Content */}
            <div className="flex-grow container-fluid mt-2" style={{ minHeight: '100vh' }}>
                <div className="card bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 w-full h-full rounded-xl">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLayout; 