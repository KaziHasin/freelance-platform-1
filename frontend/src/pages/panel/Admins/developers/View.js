import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmailInput } from "@/components/forms/inputs/EmailInput";
import { SelectBox } from "@/components/forms/inputs/SelectBox";
import { TextInput } from "@/components/forms/inputs/TextInput";
import PageLayout from "@/components/layout/admin/PageLayout";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import { useGetDeveloperQuery, useUpdateDeveloperStatusMutation, useUpdateVerificationStatusMutation } from "@/store/slices/DeveloperSlice";
import { capitalizeFirstLetter, formatDate } from "@/utils/format";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Verification from "./components/Verification";
import Profile from "./components/Profile";
import toast from "react-hot-toast";
const DeveloperView = () => {
    const { id } = useParams();
    const { data, isLoading, isError, refetch } = useGetDeveloperQuery(id, { skip: !id });
    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'Developers', path: '' },
        { label: 'View Developer', path: '' }
    ];
    const [updateStatus] = useUpdateDeveloperStatusMutation();
    const [updateVerificationStatus] = useUpdateVerificationStatusMutation();
    const navigate = useNavigate();
    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;
        try {
            await updateStatus({ id: data._id, status: newStatus }).unwrap();
            console.log("Status updated successfully");
        }
        catch (err) {
            console.error("Failed to update status", err);
        }
    };
    const changeStatus = async (id, status) => {
        try {
            await updateVerificationStatus({ id, status }).unwrap();
            refetch();
            toast.success(`Verification ${status.toLowerCase()} successfully`);
        }
        catch (error) {
            toast.error("Failed to update verification status");
            console.error(error);
        }
    };
    const tabData = [
        {
            label: 'Basic Info',
            content: (_jsxs("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: [_jsxs("div", { className: "flex justify-between mb-6", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Developer Details" }), _jsxs(Button, { variant: "outline-primary", size: "sm", onClick: () => navigate("/users/Developers"), children: [_jsx(ArrowLeftIcon, { className: "h-4 w-4 me-1" }), "   Back"] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx(TextInput, { label: "Name", value: data?.name || '', readOnly: true }), _jsx(EmailInput, { label: "Email", value: data?.email || '', readOnly: true }), _jsx(TextInput, { label: "Phone", value: data?.phone || '', readOnly: true }), _jsx(TextInput, { label: "Provider", value: capitalizeFirstLetter(data?.provider) || '', readOnly: true }), _jsx(TextInput, { label: "Joined At", value: formatDate(data?.createdAt), readOnly: true }), _jsx(SelectBox, { label: "Status", value: data?.status || "", options: [
                                    { label: "Active", value: "ACTIVE" },
                                    { label: "Inactive", value: "INACTIVE" },
                                ], onChange: handleStatusChange }), _jsx(TextInput, { label: "Role", value: data?.role || '', readOnly: true })] })] }))
        },
        {
            label: 'Profile',
            content: data?.developer ? (_jsx(Profile, { data: {
                    profile: data.developer.profile,
                    avatar: data.avatar,
                    level: data.developer.level,
                    rating: data.developer.rating,
                    isActive: data.developer.isActive,
                    assignedCount: data.developer.assignedCount,
                    lastAssignedAt: data.developer.lastAssignedAt
                } })) : (_jsx("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: _jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No profile data available" }) }))
        },
        {
            label: 'Verification',
            content: data?.developer?.verification ? (_jsx(Verification, { data: data.developer.verification, isAdmin: true, onStatusChange: (status) => changeStatus(data?.developer.id, status) })) : (_jsx("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: _jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No verification data available" }) }))
        },
    ];
    return (_jsx(PageLayout, { title: "View Developer", breadcrumbs: breadcrumbs, children: _jsx("div", { className: "mt-2", children: _jsx(Tabs, { tabs: tabData }) }) }));
};
export default DeveloperView;
