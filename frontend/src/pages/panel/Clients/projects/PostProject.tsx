import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useListSkillsQuery, useResolveSkillsMutation } from "@/store/slices/SkillSlice";
import { useCreateProjectMutation } from "@/store/slices/ProjectSlice";
import debounce from "lodash.debounce";
import { TextInput } from "@/components/forms/inputs/TextInput";
import { TextArea } from "@/components/forms/inputs/TextArea";
import { SelectBox } from "@/components/forms/inputs/SelectBox";
import Button from "@/components/ui/Button";
import { DevLevel } from "@/types/enums";
import { getUser } from "@/lib/auth";
import { CreateProjectRequest } from "@/types/project";

const PostProject: React.FC = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<CreateProjectRequest>();
    const [search, setSearch] = useState("");
    const { data: skillsData } = useListSkillsQuery(search);
    const [resolveSkills] = useResolveSkillsMutation();
    const [createProject, { isLoading }] = useCreateProjectMutation();

    // Convert backend skills → react-select options
    const skillOptions = (skillsData?.items ?? []).map((s) => ({
        label: s.label,
        value: s._id,
    }));
    const handleInputChange = debounce((inputValue: string) => {
        setSearch(inputValue);
    }, 300);

    const onSubmit = async (data: CreateProjectRequest) => {
        try {
            // Resolve new or existing skill IDs on the server (tags -> ids)
            const tags = data.requiredSkillIds.map((s) => s.label);
            const res = await resolveSkills({ tags }).unwrap();

            // Build FormData
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description || "");
            formData.append("clientId", getUser().id);

            if (data.preferredLevel) {
                formData.append("preferredLevel", data.preferredLevel);
            }

            // Append skill ids as repeated fields (no [] suffix)
            res.skillIds.forEach((id: string) => formData.append("requiredSkillIds", id));

            // Append file (if present)
            const fileInput = data.agreementFileUrl as unknown as FileList | undefined;
            if (fileInput && fileInput.length > 0) {
                formData.append("agreementFileUrl", fileInput[0]);
            }


            // Call createProject: do NOT set Content-Type manually anywhere when sending FormData
            const result = await createProject(formData).unwrap();

            console.log("✅ Project Created:", result);
        } catch (error: any) {
            console.error("❌ Project creation failed:", error);
        }
    };



    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6">Post a New Project</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <TextInput label="Project Title" {...register("title", { required: "Title is required" })} />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

                <TextArea label="Project Description" rows={5} {...register("description", { required: "Description is required" })} />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

                {/* Skills */}
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
                                onChange={(val) => field.onChange(val)}
                                onInputChange={handleInputChange}
                                options={skillOptions}
                                placeholder="Type and press Enter..."
                            />
                        )}
                    />
                    {errors.requiredSkillIds && (
                        <p className="text-red-500 text-sm">{errors.requiredSkillIds.message as string}</p>
                    )}
                </div>

                <SelectBox
                    label="Preferred Developer Level"
                    {...register("preferredLevel")}
                    options={Object.values(DevLevel).map((lvl) => ({ label: lvl, value: lvl }))}
                />

                <div>
                    <label className="block text-sm font-semibold mb-2">Agreement File</label>
                    <input
                        type="file"
                        {...register("agreementFileUrl")}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit" variant="success">Submit Project</Button>
                </div>
            </form>
        </div>
    );
};

export default PostProject;
