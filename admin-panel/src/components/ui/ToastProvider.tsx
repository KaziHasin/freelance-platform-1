import React from "react";
import { useToast } from "@/hooks/use-toast";
import Toast from "@/components/ui/Toast";

const ToastProvider: React.FC = () => {
    const { toasts, dismiss } = useToast();

    return (
        <div className="fixed bottom-6 right-6 space-y-3 z-[9999]">
            {toasts.map((t) => (
                <Toast
                    key={t.id}
                    open={t.open}
                    onOpenChange={() => dismiss(t.id)}
                    title={t.title}
                    description={t.description}
                    action={t.action}
                    variant={t.variant}
                />
            ))}
        </div>
    );
};

export default ToastProvider;
