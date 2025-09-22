import Button from "@/components/ui/Button";
import Offcanvas from "@/components/ui/Offcanvas";
import ViewButton from "@/components/ui/ViewButton";
import { formatDate } from "@/utils/format";
import { useState } from "react";


interface ClientProjectsProps {
    data: any;
}

const ClientProjects: React.FC<ClientProjectsProps> = ({ data }) => {
    const [rightOffcanvas, setRightOffcanvas] = useState(false);

    return (
        <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700 rounded-xl" >
            {
                data?.client?.projects?.length ? (
                    <div className="overflow-x-auto" >
                        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700 text-sm">
                            <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                                <tr>
                                    <th className="px-4 py-3 border border-gray-200 dark:border-gray-700">#</th>
                                    <th className="px-4 py-3 border border-gray-200 dark:border-gray-700">Project Name</th>
                                    <th className="px-4 py-3 border border-gray-200 dark:border-gray-700">Created At</th>
                                    <th className="px-4 py-3 border border-gray-200 dark:border-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.client.projects.map((project: any, idx: number) => (
                                    <tr
                                        key={idx}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                                    >
                                        <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">
                                            {idx + 1}
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">
                                            {project.title || "N/A"}
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">
                                            {formatDate(project.createdAt)}
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">
                                            <div>
                                                <ViewButton onClick={() => setRightOffcanvas(true)} />

                                                <Offcanvas
                                                    isOpen={rightOffcanvas}
                                                    onClose={() => setRightOffcanvas(false)}
                                                    position="right"
                                                    title="Right Offcanvas"
                                                    size="lg"
                                                >
                                                    <p className="text-gray-600">
                                                        This is a basic right-positioned offcanvas panel. It slides in from the right side
                                                        of the screen.
                                                    </p>
                                                </Offcanvas>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div >
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">No project info found</p>
                )}

        </div >
    );
}

export default ClientProjects;
