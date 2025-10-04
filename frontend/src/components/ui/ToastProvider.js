import { jsx as _jsx } from "react/jsx-runtime";
import { useToast } from "@/hooks/use-toast";
import Toast from "@/components/ui/Toast";
const ToastProvider = () => {
    const { toasts, dismiss } = useToast();
    return (_jsx("div", { className: "fixed bottom-6 right-6 space-y-3 z-[9999]", children: toasts.map((t) => (_jsx(Toast, { open: t.open, onOpenChange: () => dismiss(t.id), title: t.title, description: t.description, action: t.action, variant: t.variant }, t.id))) }));
};
export default ToastProvider;
