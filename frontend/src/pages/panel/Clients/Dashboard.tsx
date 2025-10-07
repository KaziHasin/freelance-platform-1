import React from 'react';
import DashboardStats from '@/components/clients/DashboardStats';
import ActiveProjects from '@/components/clients/ActiveProjects';
import RecentActivity from '@/components/clients/RecentActivity';
import TopFreelancers from '@/components/clients/TopFreelancers';
import { PlusIcon } from '@heroicons/react/24/outline';
import SpendingChart from '@/components/clients/SpendingChart';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Dashboard: React.FC = () => {

    const navigate = useNavigate();
    return (
        <div className="space-y-6">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                            Welcome back! Here's what's happening with your projects.
                        </p>
                    </div>
                    <Button
                        onClick={() => navigate('/client/post-project')}
                        variant="success"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5 dark:text-gray-200" />
                        Post Project
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="mb-8">
                    <DashboardStats />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side (2 columns) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Active Projects */}
                        <ActiveProjects />

                        {/* Chart Section */}
                        <div>
                            <SpendingChart />
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-8">
                        <RecentActivity />
                        <TopFreelancers />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
