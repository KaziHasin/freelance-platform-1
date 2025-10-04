import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/admin/PageLayout';
import Table from '@/components/ui/Table';
import DeleteButton from '@/components/ui/DeleteButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDeletePackageMutation, useGetPackagesQuery } from '@/store/slices/PackageSlice';
import EditButton from '@/components/ui/EditButton';
import Button from '@/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/hooks/use-toast';
const Packages = () => {
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
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this package?"))
            return;
        try {
            await deletePackage(id).unwrap();
            toast({
                title: "Package deleted",
                description: "The package has been successfully removed.",
                variant: "success",
            });
        }
        catch (error) {
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
        projectsPerMonth: plan.projectsPerMonth ?? 'UNLIMITED',
        contactClicksPerProject: plan.contactClicksPerProject ?? 'UNLIMITED',
    })) || [];
    const columns = [
        {
            header: 'Code',
            accessor: 'code',
        },
        {
            header: 'Prices',
            accessor: (plan) => {
                if (!plan.prices)
                    return '-';
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
            accessor: (plan) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(EditButton, { title: `Edit ${plan.name}`, onClick: () => navigate(`/admin/packages/edit/${plan.id}`) }), _jsx(DeleteButton, { title: `Delete ${plan.name}`, onClick: () => handleDelete(plan.id) })] })),
        },
    ];
    const breadcrumbs = [
        { label: 'Packages', path: '' }
    ];
    return (_jsxs(PageLayout, { title: "Manage Packages", breadcrumbs: breadcrumbs, children: [_jsx("div", { className: "flex justify-end items-start", children: _jsx(Button, { size: 'sm', onClick: () => navigate('/admin/packages/create'), leftIcon: _jsx(PlusIcon, { className: "w-4 h-4" }), children: "Add New" }) }), isLoading ? (_jsx("div", { className: "text-center py-10 text-gray-500", children: "Loading plans..." })) : isError ? (_jsx("div", { className: "text-center py-10 text-red-500", children: "Error loading plans. " })) : (_jsx(Table, { columns: columns, data: plans, itemsPerPage: 10, sortable: true, currentPage: page, totalEntries: data?.total, onPageChange: (newPage) => setPage(newPage), onItemsPerPageChange: (newLimit) => {
                    setLimit(newLimit);
                    setPage(1);
                } }))] }));
};
export default Packages;
