import React from "react";

interface VerificationData {
    docUrl?: string;
    docFile?: string;
    idType: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    reviewedBy?: {
        name: string;
        avatar?: string;
    };
    reviewedAt?: string,
}

interface VerificationProps {
    data: VerificationData;
    isAdmin?: boolean;
    onStatusChange?: (status: "APPROVED" | "REJECTED") => void;
}

const Verification: React.FC<VerificationProps> = ({
    data,
    isAdmin = false,
    onStatusChange,
}) => {
    const { docUrl, docFile, idType, status, reviewedBy, reviewedAt } = data;

    const statusColors = {
        PENDING: "bg-yellow-100 text-yellow-800",
        APPROVED: "bg-green-100 text-green-800",
        REJECTED: "bg-red-100 text-red-800",
    };

    const idTypeLabels: { [key: string]: string } = {
        "id-card": "ID Card",
        "pan-card": "PAN Card",
        passport: "Passport",
        "driving-license": "Driving License",
    };

    const getFilePreview = () => {
        const file = docUrl || docFile;
        if (!file) return null;

        const isImage = /\.(jpg|jpeg|png|gif)$/i.test(file);
        const isPdf = /\.pdf$/i.test(file);
        const isDoc = /\.(doc|docx)$/i.test(file);

        if (isImage) {
            return (
                <img
                    src={file}
                    alt={idTypeLabels[idType]}
                    className="w-full h-64 object-cover rounded-lg"
                />
            );
        }

        return (
            <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gray-50 dark:bg-gray-700">
                <svg
                    className="w-12 h-12 text-gray-400 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.4a1 1 0 00-.3-.7l-5.4-5.4A1 1 0 0012.6 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                    {isPdf ? "PDF Document" : isDoc ? "Word Document" : "File"}
                </span>
                <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                    View / Download
                </a>
            </div>
        );
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {idTypeLabels[idType]}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Document Section */}
                <div>{getFilePreview()}</div>

                {/* Status & Review Section */}
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Status
                        </span>
                        <div
                            className={`mt-1 ms-2 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${statusColors[status]}`}
                        >
                            {status}
                        </div>
                    </div>

                    {reviewedBy && (
                        <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Reviewed by
                            </span>
                            <div className="mt-2 flex items-center gap-3">
                                {reviewedBy.avatar ? (
                                    <img
                                        src={reviewedBy.avatar}
                                        alt={reviewedBy.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                            {reviewedBy.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {reviewedBy.name}
                                    </span>
                                    {reviewedAt && (
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {reviewedAt}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Admin Action Buttons */}
                    {isAdmin && (
                        <div className="mt-3 flex justify-end gap-2">
                            {(status === "PENDING" || status === "REJECTED") && (
                                <button
                                    onClick={() => onStatusChange?.("APPROVED")}
                                    className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
                                >
                                    Approve
                                </button>
                            )}
                            {(status === "PENDING" || status === "APPROVED") && (
                                <button
                                    onClick={() => onStatusChange?.("REJECTED")}
                                    className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                                >
                                    Reject
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Verification;
