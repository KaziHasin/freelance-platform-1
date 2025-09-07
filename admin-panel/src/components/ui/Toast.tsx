import React from 'react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export type ToastActionElement = React.ReactElement<{ onClick?: () => void }>;

export interface ToastProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
    variant?: ToastVariant;
    className?: string;
}

const variantClasses: Record<ToastVariant, string> = {
    info: 'bg-blue-50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    success: 'bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800',
    error: 'bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800',
};

const Toast: React.FC<ToastProps> = ({
    open = true,
    onOpenChange,
    title,
    description,
    action,
    variant = 'info',
    className = '',
}) => {
    if (!open) return null;

    const handleClose = () => {
        onOpenChange?.(false);
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 min-w-[280px] max-w-xs rounded-lg border p-4 shadow-lg transition-all duration-300 ${variantClasses[variant]} ${className}`}
            role="status"
        >
            <div className="flex items-start">
                <div className="flex-1">
                    {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
                    {description && <p className="text-sm">{description}</p>}
                </div>
                <button
                    type="button"
                    className="ml-4 inline-flex flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={handleClose}
                >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {action && (
                <div className="mt-3 flex justify-end">{action}</div>
            )}
        </div>
    );
};

export default Toast;
