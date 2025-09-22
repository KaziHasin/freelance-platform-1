import Offcanvas from "@/components/ui/Offcanvas";

interface ProjectDetailsProps {
    data: any;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data, isOpen, onClose }) => {
    return (
        <Offcanvas
            isOpen={isOpen}
            onClose={onClose}
            position="right"
            title="Project Details"
            size="md"
        >
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-gray-600">Created At: {data.createdAt}</p>
            <p className="text-gray-600">Project ID: {data._id}</p>
        </Offcanvas>
    );
};

export default ProjectDetails;
