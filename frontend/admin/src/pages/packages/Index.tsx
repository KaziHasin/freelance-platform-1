import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Table from '@/components/ui/Table';
import DeleteButton from '@/components/ui/DeleteButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDeletePackageMutation, useGetPackagesQuery } from '@/store/slices/PackageSlice';
import EditButton from '@/components/ui/EditButton';
import Button from '@/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/hooks/use-toast';


const Packages: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();

    useEffect(() => {
        if (location.state || location.state) {
            toast({
                title: `Package ${location.state}`,
                description: `A package has been ${location.state} successfully`,
                variant: "success",
            });

            window.history.replaceState({}, document.title);
        }
    }, [location.state, toast]);

    const { data, isLoading, isError } = useGetPackagesQuery({
        page,
        limit,
    });

    const [deletePackage] = useDeletePackageMutation();

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this package?")) return;
        try {
            await deletePackage(id).unwrap();
            toast({
                title: "Package deleted",
                description: "The package has been successfully removed.",
                variant: "success",
            });
        } catch (error: any) {
            toast({
                title: "Error",
                description: error?.data?.message || "Failed to delete package",
                variant: "error"
            });
        }
    };

    const plans = data?.items.map((plan) => ({
        id: plan._id,
        code: plan.code,
        prices: plan.prices,
        projectsPerMonth: plan.projectsPerMonth,
        contactClicksPerProject: plan.contactClicksPerProject,

    })) || [];

    const columns = [
        {
            header: 'Code',
            accessor: 'code',
        },

        {
            header: 'Prices',
            accessor: (plan) => {
                if (!plan.prices) return '-';
                return Object.entries(plan.prices)
                    .map(([currency, value]) => `${currency}: ${value}`)
                    .join(', ');
            },
        },
        {
            header: 'ProjectsPerMonth',
            accessor: 'projectsPerMonth',
        },
        {
            header: 'ContactClicksPerProject',
            accessor: 'contactClicksPerProject',
        },

        {
            header: 'Actions',
            accessor: (plan) => (
                <div className="flex items-center space-x-2">
                    <EditButton
                        title={`Edit ${plan.name}`}
                        onClick={() => navigate(`/packages/edit/${plan.id}`)}
                    />
                    <DeleteButton
                        title={`Delete ${plan.name}`}
                        onClick={() => handleDelete(plan.id)}
                    />
                </div>
            ),
        },
    ];


    const breadcrumbs = [
        { label: 'Packages', path: '' }
    ];

    return (
        <PageLayout
            title="Manage Packages"
            breadcrumbs={breadcrumbs}
        >
            <div className="flex justify-end items-start">
                <Button
                    size='sm'
                    onClick={() => navigate('/packages/create')}
                    leftIcon={<PlusIcon className="w-4 h-4" />}
                >
                    Add New
                </Button>
            </div>

            {isLoading ? (
                <div className="text-center py-10 text-gray-500">Loading plans...</div>
            ) : isError ? (
                <div className="text-center py-10 text-red-500">Error loading plans. </div>
            ) : (

                <Table
                    columns={columns}
                    data={plans}
                    itemsPerPage={10}
                    sortable={true}
                    currentPage={page}
                    totalEntries={data?.total}
                    onPageChange={(newPage) => setPage(newPage)}
                    onItemsPerPageChange={(newLimit) => {
                        setLimit(newLimit);
                        setPage(1);
                    }}
                />
            )}
        </PageLayout>
    );
};

export default Packages
