import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "@/components/forms/inputs/TextInput";
import { TextArea } from "@/components/forms/inputs/TextArea";
import { SelectBox } from "@/components/forms/inputs/SelectBox";
import Button from "@/components/ui/Button";
import CreatableSelect from "react-select/creatable";
import { DevLevel } from "@/types/enums";
const PostProject = () => {
    const { register, handleSubmit, control, setValue, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        if (data.preferredLevel) {
            formData.append("preferredLevel", data.preferredLevel);
        }
        // Skills → backend expects IDs or names
        data.requiredSkillIds.forEach((skill) => formData.append("requiredSkillIds[]", skill.value));
        if (data.agreementFile && data.agreementFile[0]) {
            formData.append("agreementFile", data.agreementFile[0]);
        }
        console.log("Submitting Project:", Object.fromEntries(formData));
        // TODO: Call API with fetch or RTK mutation
    };
    return (_jsxs("div", { className: "max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Post a New Project" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6", children: [_jsx(TextInput, { label: "Project Title", placeholder: "Enter project title", ...register("title", { required: "Title is required" }) }), errors.title && (_jsx("span", { className: "text-red-500 text-sm", children: errors.title.message })), _jsx(TextArea, { label: "Project Description", rows: 5, placeholder: "Describe your project", ...register("description", { required: "Description is required" }) }), errors.description && (_jsx("span", { className: "text-red-500 text-sm", children: errors.description.message })), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Skills" }), _jsx(Controller, { name: "requiredSkillIds", control: control, rules: { required: "At least one skill is required" }, render: ({ field }) => (_jsx(CreatableSelect, { isMulti: true, ...field, placeholder: "Type and press enter...", onChange: (val) => field.onChange(val), 
                                    // TODO: connect this to backend (async loadOptions)
                                    options: [
                                        { value: "react", label: "React" },
                                        { value: "node", label: "Node.js" },
                                        { value: "mongodb", label: "MongoDB" },
                                    ] })) }), errors.requiredSkillIds && (_jsx("span", { className: "text-red-500 text-sm", children: errors.requiredSkillIds.message }))] }), _jsx(SelectBox, { label: "Preferred Developer Level", ...register("preferredLevel"), options: Object.values(DevLevel).map((lvl) => ({
                            label: lvl,
                            value: lvl,
                        })) }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Agreement File" }), _jsx("input", { type: "file", ...register("agreementFile"), className: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" })] }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", variant: "primary", children: "Submit Project" }) })] })] }));
};
export default PostProject;
