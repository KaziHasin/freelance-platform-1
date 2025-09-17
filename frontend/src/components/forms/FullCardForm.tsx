import React from 'react';

interface FullCardFormProps {
    children: React.ReactNode
}


const FullCardForm: React.FC<FullCardFormProps> = ({ children }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-0 shadow-sm border border-gray-100 dark:border-gray-700">
            {children}
        </div>
    )
}

export default FullCardForm;