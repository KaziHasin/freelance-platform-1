import React from "react";

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
    switch?: boolean; // if true, render as switch
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
    label,
    id,
    switch: isSwitch,
    ...props
}) => {
    const inputId =
        id || props.name || (label ? `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : "");

    if (isSwitch) {
        // Switch style
        return (
            <div className="flex flex-col">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                    >
                        {label}
                    </label>
                )}
                <div className="relative inline-block w-12 h-7">
                    <input
                        type="checkbox"
                        id={inputId}
                        {...props}
                        className="sr-only peer"
                    />
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full
                                    peer-checked:bg-green-500 transition-colors duration-200 ease-in-out"></div>
                    <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow
                                    peer-checked:translate-x-5 transition-transform duration-200 ease-in-out"></div>
                </div>
            </div>
        );
    }

    // Regular checkbox style
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id={inputId}
                {...props}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-0"
            />
            {label && (
                <label htmlFor={inputId} className="text-sm text-gray-700 dark:text-gray-300">
                    {label}
                </label>
            )}
        </div>
    );
};
