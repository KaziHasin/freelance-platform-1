import React from "react";

interface SelectBoxProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { label: string; value: string }[];
    id?: string;
}

export const SelectBox: React.FC<SelectBoxProps> = ({ label, options, id, required, ...props }) => {
    const selectId = id || props.name || `select-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div>
            {label && (
                <label
                    htmlFor={selectId}
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <select
                id={selectId}
                {...props}
                className={`w-full pl-4 py-3 
                    border border-gray-200 dark:border-gray-600 rounded-lg 
                    focus:border-indigo-500 hover:border-indigo-500 
                    focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
                    dark:bg-gray-700 dark:text-white 
                    transition-colors duration-200 ease-in-out`}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
