import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', fullScreen = false }) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
    };

    const spinner = (
        <div className={`animate-spin rounded-full border-b-2 border-primary ${sizeClasses[size]}`} />
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50">
                {spinner}
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center p-4">
            {spinner}
        </div>
    );
};

export default LoadingSpinner;