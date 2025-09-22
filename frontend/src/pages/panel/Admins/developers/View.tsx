import { EmailInput } from "@/components/forms/inputs/EmailInput";
import { SelectBox } from "@/components/forms/inputs/SelectBox";
import { TextInput } from "@/components/forms/inputs/TextInput";
import PageLayout from "@/components/layout/admin/Layout";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import { useGetDeveloperQuery, useUpdateDeveloperStatusMutation, useUpdateVerificationStatusMutation } from "@/store/slices/DeveloperSlice";
import { capitalizeFirstLetter, formatDate } from "@/utils/format";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Verification from "./components/Verification";
import Profile from "./components/Profile";
import toast from "react-hot-toast";

const DeveloperView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isError, refetch } = useGetDeveloperQuery(id!, { skip: !id });

    console.log(data);


    const breadcrumbs = [
        { label: 'Manage Users', path: '' },
        { label: 'Developers', path: '' },
        { label: 'View Developer', path: '' }
    ];

    const [updateStatus] = useUpdateDeveloperStatusMutation();
    const [updateVerificationStatus] = useUpdateVerificationStatusMutation();

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

    const changeStatus = async (id: string, status: "APPROVED" | "REJECTED") => {
        try {
            await updateVerificationStatus({ id, status }).unwrap();
            refetch();
            toast.success(`Verification ${status.toLowerCase()} successfully`);
        } catch (error) {
            toast.error("Failed to update verification status");
            console.error(error);
        }
    };

    const tabData = [
        {
            label: 'Basic Info',
            content: (
                <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between mb-6">
                        <h2 className="text-lg font-semibold">Developer Details</h2>
                        <Button variant="outline-primary" size="sm" onClick={() => navigate("/users/Developers")}>
                            <ArrowLeftIcon className="h-4 w-4 me-1" />   Back
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TextInput label="Name" value={data?.name || ''} readOnly />
                        <EmailInput label="Email" value={data?.email || ''} readOnly />
                        <TextInput label="Phone" value={data?.phone || ''} readOnly />
                        <TextInput label="Provider" value={capitalizeFirstLetter(data?.provider) || ''} readOnly />
                        <TextInput label="Joined At" value={formatDate(data?.createdAt)} readOnly />

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
            label: 'Profile',
            content: data?.developer ? (
                <Profile data={{
                    profile: data.developer.profile,
                    avatar: data.avatar,
                    level: data.developer.level,
                    rating: data.developer.rating,
                    isActive: data.developer.isActive,
                    assignedCount: data.developer.assignedCount,
                    lastAssignedAt: data.developer.lastAssignedAt
                }} />
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">No profile data available</p>
                </div>
            )
        },
        {
            label: 'Verification',
            content: data?.developer?.verification ? (
                <Verification
                    data={data.developer.verification}
                    isAdmin={true}
                    onStatusChange={(status) => changeStatus(data?.developer.id, status)}
                />
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">No verification data available</p>
                </div>
            )
        },
    ];

    return (
        <PageLayout title="View Developer" breadcrumbs={breadcrumbs}>
            <div className="mt-2">
                <Tabs tabs={tabData} />
            </div>
        </PageLayout>
    );
};

export default DeveloperView;
