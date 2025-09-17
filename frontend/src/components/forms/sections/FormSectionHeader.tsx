import React from 'react';

interface FormSectionHeaderProps {
    title?: string;
}

const FormSectionHeader: React.FC<FormSectionHeaderProps> = ({ title }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700/50 -m-8 p-2 pt-0 mb-8 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h2>
        </div>
    )
}

export default FormSectionHeader;