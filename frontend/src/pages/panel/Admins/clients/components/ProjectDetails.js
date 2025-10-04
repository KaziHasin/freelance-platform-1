import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Offcanvas from "@/components/ui/Offcanvas";
const ProjectDetails = ({ data, isOpen, onClose }) => {
    return (_jsxs(Offcanvas, { isOpen: isOpen, onClose: onClose, position: "right", title: "Project Details", size: "md", children: [_jsx("h3", { className: "text-lg font-semibold", children: data.title }), _jsxs("p", { className: "text-gray-600", children: ["Created At: ", data.createdAt] }), _jsxs("p", { className: "text-gray-600", children: ["Project ID: ", data._id] })] }));
};
export default ProjectDetails;
