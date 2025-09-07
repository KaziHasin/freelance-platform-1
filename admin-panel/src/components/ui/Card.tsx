import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'bordered' | 'elevated';
}

const Card: React.FC<CardProps> = ({
    title,
    children,
    className = '',
    variant = 'default'
}) => {
    const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg';
    const variantClasses = {
        default: 'shadow-sm',
        bordered: 'border border-gray-200 dark:border-gray-700',
        elevated: 'shadow-lg'
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {title && (
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                </div>
            )}
            <div className="p-6">{children}</div>
        </div>
    );
};

export default Card;

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
    return (
        <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl ${className}`}>
            {children}
        </div>
    );
};

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const CardBody = ({ children, className = '' }: CardBodyProps) => {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
};

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
    return (
        <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 rounded-b-xl ${className}`}>
            {children}
        </div>
    );
}; 