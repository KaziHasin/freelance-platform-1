import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    id?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, id, ...props }) => {
    const inputId =
        id || props.name || `textarea-${label?.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                    {label}
                </label>
            )}
            <textarea
                id={inputId}
                {...props}
                className={`w-full px-4 py-3 
          border border-gray-200 dark:border-gray-600 rounded-lg 
          focus:border-indigo-500 hover:border-indigo-500 
          focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
          dark:bg-gray-700 dark:text-white 
          transition-colors duration-200 ease-in-out`}
            />
        </div>
    );
};
