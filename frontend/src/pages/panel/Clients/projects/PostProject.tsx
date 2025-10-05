import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "@/components/forms/inputs/TextInput";
import { TextArea } from "@/components/forms/inputs/TextArea";
import { SelectBox } from "@/components/forms/inputs/SelectBox";
import Button from "@/components/ui/Button";
import CreatableSelect from "react-select/creatable";
import { DevLevel } from "@/types/enums";

// Types
interface PostProjectFormValues {
    title: string;
    description: string;
    requiredSkillIds: { label: string; value: string }[];
    preferredLevel?: DevLevel;
    agreementFile?: FileList;
}

const PostProject: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<PostProjectFormValues>();

    const onSubmit = async (data: PostProjectFormValues) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);

        if (data.preferredLevel) {
            formData.append("preferredLevel", data.preferredLevel);
        }

        // Skills → backend expects IDs or names
        data.requiredSkillIds.forEach((skill) =>
            formData.append("requiredSkillIds[]", skill.value)
        );

        if (data.agreementFile && data.agreementFile[0]) {
            formData.append("agreementFile", data.agreementFile[0]);
        }

        console.log("Submitting Project:", Object.fromEntries(formData));
        // TODO: Call API with fetch or RTK mutation
    };

    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6">Post a New Project</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <TextInput
                    label="Project Title"
                    placeholder="Enter project title"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                    <span className="text-red-500 text-sm">{errors.title.message}</span>
                )}

                {/* Description */}
                <TextArea
                    label="Project Description"
                    rows={5}
                    placeholder="Describe your project"
                    {...register("description", { required: "Description is required" })}
                />
                {errors.description && (
                    <span className="text-red-500 text-sm">
                        {errors.description.message}
                    </span>
                )}

                {/* Skills (Tag input with autocomplete + creatable) */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Skills</label>
                    <Controller
                        name="requiredSkillIds"
                        control={control}
                        rules={{ required: "At least one skill is required" }}
                        render={({ field }) => (
                            <CreatableSelect
                                isMulti
                                {...field}
                                placeholder="Type and press enter..."
                                onChange={(val) => field.onChange(val)}
                                // TODO: connect this to backend (async loadOptions)
                                options={[
                                    { value: "react", label: "React" },
                                    { value: "node", label: "Node.js" },
                                    { value: "mongodb", label: "MongoDB" },
                                ]}
                            />
                        )}
                    />
                    {errors.requiredSkillIds && (
                        <span className="text-red-500 text-sm">
                            {errors.requiredSkillIds.message as string}
                        </span>
                    )}
                </div>

                {/* Preferred Developer Level */}
                <SelectBox
                    label="Preferred Developer Level"
                    {...register("preferredLevel")}
                    options={Object.values(DevLevel).map((lvl) => ({
                        label: lvl,
                        value: lvl,
                    }))}
                />

                {/* Agreement File */}
                <div>
                    <label className="block text-sm font-semibold mb-2">
                        Agreement File
                    </label>
                    <input
                        type="file"
                        {...register("agreementFile")}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                    <Button type="submit" variant="success">
                        Submit Project
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PostProject;
