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

const ClientView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isError } = useGetClientQuery(id!, { skip: !id });

    console.log(data);


    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'Clients', path: '' },
        { label: 'View Client', path: '' }
    ];

    const [updateStatus] = useUpdateClientStatusMutation();

    const navigate = useNavigate();

    const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;

        try {
            await updateStatus({ id: data._id, status: newStatus }).unwrap();
            console.log("Status updated successfully");
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const tabData = [
        {
            label: 'Basic Info',
            content: (
                <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between mb-6">
                        <h2 className="text-lg font-semibold">Client Details</h2>
                        <Button variant="outline-primary" size="sm" onClick={() => navigate("/users/clients")}>
                            <ArrowLeftIcon className="h-4 w-4 me-1" />   Back
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TextInput label="Name" value={data?.name || ''} readOnly />
                        <EmailInput label="Email" value={data?.email || ''} readOnly />
                        <TextInput label="Phone" value={data?.phone || ''} readOnly />
                        <TextInput label="Provider" value={capitalizeFirstLetter(data?.provider) || ''} readOnly /><TextInput label="Joined At" value={formatDate(data?.createdAt)} readOnly />
                        <SelectBox
                            label="Status"
                            value={data?.status || ""}
                            options={[
                                { label: "Active", value: "ACTIVE" },
                                { label: "Inactive", value: "INACTIVE" },
                            ]}
                            onChange={handleStatusChange}
                        />
                        <TextInput label="Role" value={data?.role || ''} readOnly />
                    </div>
                </div>
            )
        },
        {
            label: 'Subscriptions Info',
            content: (
                <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                    {data?.client?.subscriptions?.length ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {data.client.subscriptions.map((sub: any) => (
                                <div key={sub._id} className="p-4 border rounded-md shadow-sm bg-gray-50 dark:bg-gray-900">
                                    <TextInput label="Package" value={sub.packageId?.code || ''} readOnly />
                                    <TextInput label="Package" value={sub.packageId?.code || ''} readOnly />
                                    <TextInput label="Status" value={sub.status || ''} readOnly />
                                    <TextInput label="Trial" value={sub.isTrial ? "Yes" : "No"} readOnly />
                                    <TextInput label="Start Date" value={new Date(sub.startDate).toLocaleString()} readOnly />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No subscriptions found</p>
                    )}
                </div>
            )
        },
        {
            label: 'Projects Info',
            content: (
                <ClientProjects data={data} />
            )
        }
    ];

    return (
        <PageLayout title="View Client" breadcrumbs={breadcrumbs}>
            <div className="mt-2">
                <Tabs tabs={tabData} />
            </div>
        </PageLayout>
    );
};

export default ClientView;
