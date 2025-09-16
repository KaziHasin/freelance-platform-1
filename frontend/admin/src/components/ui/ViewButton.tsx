import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';

interface ViewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    icon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

const ViewButton: React.FC<ViewButtonProps> = ({
    title = 'Edit',
    icon = <EyeIcon className="w-4 h-4" />,
    size = 'sm',
    className = '',
    ...props
}) => {
    const sizeClasses = {
        sm: 'p-1',
        md: 'p-1.5',
        lg: 'p-2'
    };

    return (
        <button
            className={`${sizeClasses[size]} rounded bg-green-600 hover:bg-green-700 dark:bg-green-900/70 dark:hover:bg-green-900/80 text-white hover:text-white dark:text-white dark:hover:text-green-300 transition-colors duration-200 ${className}`}
            title={title}
            aria-label={title}
            {...props}
        >
            {icon}
        </button>
    );
};

export default ViewButton;
