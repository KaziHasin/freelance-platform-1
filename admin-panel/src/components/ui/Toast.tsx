import React, { useEffect } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";
export type ToastTheme = "light" | "deep";

export type ToastActionElement = React.ReactElement<{ onClick?: () => void }>;

export type ToastPosition =
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";

export interface ToastProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
    variant?: ToastVariant;
    theme?: ToastTheme;
    className?: string;
    duration?: number;
    position?: ToastPosition;
}

const lightVariantClasses: Record<ToastVariant, string> = {
    info: "bg-blue-50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
    success: "bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
    warning: "bg-yellow-50 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800",
    error: "bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
};

const deepVariantClasses: Record<ToastVariant, string> = {
    info: "bg-blue-600 text-white border-blue-700",
    success: "bg-green-600 text-white border-green-700",
    warning: "bg-yellow-600 text-white border-yellow-700",
    error: "bg-red-600 text-white border-red-700",
};

const positionClasses: Record<ToastPosition, string> = {
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
};

const Toast: React.FC<ToastProps> = ({
    open = true,
    onOpenChange,
    title,
    description,
    action,
    variant = "info",
    theme = "light",
    className = "",
    duration = 3000,
    position = "top-right",
}) => {
    useEffect(() => {
        if (open && duration > 0) {
            const timer = setTimeout(() => {
                onOpenChange?.(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onOpenChange]);

    if (!open) return null;

    const handleClose = () => {
        onOpenChange?.(false);
    };

    const variantClasses =
        theme === "deep" ? deepVariantClasses : lightVariantClasses;

    console.log(theme);


    return (
        <div
            className={`fixed z-50 min-w-[360px] max-w-xs rounded-lg border p-4 shadow-lg transition-all duration-300 ${variantClasses[variant]} ${positionClasses[position]} ${className}`}
            role="status"
        >
            <div className="flex items-start">
                <div className="flex-1">
                    {title && <h3 className="text-sm font-semibold mb-1">{title}</h3>}
                    {description && <p className="text-sm opacity-90">{description}</p>}
                </div>
                <button
                    type="button"
                    className="ml-4 inline-flex flex-shrink-0 text-current/70 hover:text-current focus:outline-none"
                    onClick={handleClose}
                >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {action && <div className="mt-3 flex justify-end">{action}</div>}
        </div>
    );
};

export default Toast;
