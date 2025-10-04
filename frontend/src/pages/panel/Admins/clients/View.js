import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmailInput } from "@/components/forms/inputs/EmailInput";
import { SelectBox } from "@/components/forms/inputs/SelectBox";
import { TextInput } from "@/components/forms/inputs/TextInput";
import PageLayout from "@/components/layout/admin/PageLayout";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import { useGetClientQuery, useUpdateClientStatusMutation } from "@/store/slices/ClientSlice";
import { capitalizeFirstLetter, formatDate } from "@/utils/format";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ClientProjects from "./components/ClientProjects";
const ClientView = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetClientQuery(id, { skip: !id });
    console.log(data);
    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'Clients', path: '' },
        { label: 'View Client', path: '' }
    ];
    const [updateStatus] = useUpdateClientStatusMutation();
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
    const tabData = [
        {
            label: 'Basic Info',
            content: (_jsxs("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: [_jsxs("div", { className: "flex justify-between mb-6", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Client Details" }), _jsxs(Button, { variant: "outline-primary", size: "sm", onClick: () => navigate("/users/clients"), children: [_jsx(ArrowLeftIcon, { className: "h-4 w-4 me-1" }), "   Back"] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx(TextInput, { label: "Name", value: data?.name || '', readOnly: true }), _jsx(EmailInput, { label: "Email", value: data?.email || '', readOnly: true }), _jsx(TextInput, { label: "Phone", value: data?.phone || '', readOnly: true }), _jsx(TextInput, { label: "Provider", value: capitalizeFirstLetter(data?.provider) || '', readOnly: true }), _jsx(TextInput, { label: "Joined At", value: formatDate(data?.createdAt), readOnly: true }), _jsx(SelectBox, { label: "Status", value: data?.status || "", options: [
                                    { label: "Active", value: "ACTIVE" },
                                    { label: "Inactive", value: "INACTIVE" },
                                ], onChange: handleStatusChange }), _jsx(TextInput, { label: "Role", value: data?.role || '', readOnly: true })] })] }))
        },
        {
            label: 'Subscriptions Info',
            content: (_jsx("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: data?.client?.subscriptions?.length ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: data.client.subscriptions.map((sub) => (_jsxs("div", { className: "p-4 border rounded-md shadow-sm bg-gray-50 dark:bg-gray-900", children: [_jsx(TextInput, { label: "Package", value: sub.packageId?.code || '', readOnly: true }), _jsx(TextInput, { label: "Package", value: sub.packageId?.code || '', readOnly: true }), _jsx(TextInput, { label: "Status", value: sub.status || '', readOnly: true }), _jsx(TextInput, { label: "Trial", value: sub.isTrial ? "Yes" : "No", readOnly: true }), _jsx(TextInput, { label: "Start Date", value: new Date(sub.startDate).toLocaleString(), readOnly: true })] }, sub._id))) })) : (_jsx("p", { children: "No subscriptions found" })) }))
        },
        {
            label: 'Projects Info',
            content: (_jsx(ClientProjects, { data: data }))
        }
    ];
    return (_jsx(PageLayout, { title: "View Client", breadcrumbs: breadcrumbs, children: _jsx("div", { className: "mt-2", children: _jsx(Tabs, { tabs: tabData }) }) }));
};
export default ClientView;
