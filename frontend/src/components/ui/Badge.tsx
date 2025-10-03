import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';

    const sizeClasses = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-base',
    };

    const variantClasses = {
        default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    };

    const combinedClasses = `
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
    `.trim();

    return (
        <span className={combinedClasses}>
            {children}
        </span>
    );
};

// Example usage:
// <Badge>Default</Badge>
// <Badge variant="success">Success</Badge>
// <Badge variant="error">Error</Badge>
// <Badge variant="warning">Warning</Badge>
// <Badge variant="info">Info</Badge>
// <Badge size="sm">Small</Badge>
// <Badge size="lg">Large</Badge>
// <Badge className="custom-class">Custom</Badge>