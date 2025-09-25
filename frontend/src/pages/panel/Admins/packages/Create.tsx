import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/admin/PageLayout';
import { useCreatePackageMutation } from '@/store/slices/PackageSlice';
import Button from '@/components/ui/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import { CreatePackageRequest } from '@/types/package';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import { TextInput } from '@/components/forms/inputs/TextInput';
import { TextArea } from '@/components/forms/inputs/TextArea';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { SelectBox } from '@/components/forms/inputs/SelectBox';

const CreatePackage: React.FC = () => {
    const navigate = useNavigate();
    const [createPackage, { isLoading }] = useCreatePackageMutation();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<CreatePackageRequest &
    {
        pricePairs: { currency: string; amount: number }[],
        features: { value: string }[]
    }>
            ({
                defaultValues: {
                    pricePairs: [{ currency: '', amount: 0 }],
                    features: [{ value: '' }],

                },
            });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pricePairs',
    });

    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
        control,
        name: 'features',
    });

    const onSubmit = async (data: any) => {
        try {
            const prices: Record<string, number> = {};
            data.pricePairs.forEach((pair: { currency: string; amount: number }) => {
                if (pair.currency && pair.amount >= 0) {
                    prices[pair.currency.toUpperCase()] = Number(pair.amount);
                }
            });

            const features = (data.features || []).map(
                (f: { value: string }) => f.value
            );

            const payload: CreatePackageRequest = {
                code: data.code,
                prices,
                projectsPerMonth: Number(data.projectsPerMonth),
                contactClicksPerProject: Number(data.contactClicksPerProject),
                notes: data.notes,
                shortDescription: data.shortDescription,
                footerText: data.footerText,
                badge: data.badge,
                features,
            };

            await createPackage(payload).unwrap();
            navigate('/admin/packages', { state: 'created' });
        } catch (error: any) {
            if (error?.data?.details) {
                const serverErrors = error.data.details;

                serverErrors.forEach((err: { field: string; message: string }) => {
                    const fieldName = err.field.replace(/^body\./, '') as keyof CreatePackageRequest;
                    setError(fieldName, {
                        type: 'server',
                        message: err.message,
                    });
                });
            }
        }
    };

    const breadcrumbs = [
        { label: 'Manage Packages', path: '/packages' },
        { label: 'Create Package', path: '/packages/create' },
    ];

    return (
        <PageLayout title="Create Package" breadcrumbs={breadcrumbs}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
                    <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                        <FormSectionHeader title="Package Information" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Code */}
                            <div>
                                <SelectBox
                                    label="Code"
                                    required
                                    {...register("code")}
                                    options={[
                                        { label: "FREE", value: "FREE" },
                                        { label: "BASIC", value: "BASIC" },
                                        { label: "STANDARD", value: "STANDARD" },
                                        { label: "PREMIUM", value: "PREMIUM" },
                                    ]}
                                />
                                {errors.code && (
                                    <span className="text-sm text-red-500">
                                        {errors.code.message}
                                    </span>
                                )}
                            </div>

                            {/* Projects per month */}
                            <div>
                                <TextInput
                                    label="Projects Per Month"
                                    type="number"
                                    placeholder="Enter Projects Per Month"
                                    required
                                    {...register('projectsPerMonth')}
                                />
                                {errors.projectsPerMonth && (
                                    <span className="text-sm text-red-500">
                                        {errors.projectsPerMonth.message}
                                    </span>
                                )}
                            </div>

                            {/* Contact clicks */}
                            <div>
                                <TextInput
                                    label="Contact Clicks Per Project"
                                    type="number"
                                    placeholder="Enter Contact Clicks Per Project"
                                    required
                                    {...register('contactClicksPerProject')}
                                />
                                {errors.contactClicksPerProject && (
                                    <span className="text-sm text-red-500">
                                        {errors.contactClicksPerProject.message}
                                    </span>
                                )}
                            </div>

                            {/* Short Description */}
                            <div>
                                <TextInput
                                    label="Short Description"
                                    placeholder="Enter short description"
                                    required
                                    {...register("shortDescription")}
                                />
                                {errors.shortDescription && (
                                    <span className="text-sm text-red-500">
                                        {errors.shortDescription.message}
                                    </span>
                                )}
                            </div>

                            {/* Footer Text */}
                            <div>
                                <TextInput
                                    label="Footer Text"
                                    placeholder="Enter footer text"
                                    required
                                    {...register("footerText")}
                                />
                                {errors.footerText && (
                                    <span className="text-sm text-red-500">
                                        {errors.footerText.message}
                                    </span>
                                )}
                            </div>

                            {/* Badge */}
                            <div>
                                <TextInput
                                    label="Badge"
                                    placeholder="Enter badge text"
                                    {...register("badge")}
                                />
                                {errors.badge && (
                                    <span className="text-sm text-red-500">
                                        {errors.badge.message}
                                    </span>
                                )}
                            </div>


                            {/* Notes */}
                            <div className="md:col-span-2">
                                <TextArea
                                    label="Notes"
                                    name="notes"
                                    placeholder="Enter additional details..."
                                    rows={4}
                                    {...register('notes')}
                                />
                            </div>

                            {/* Dynamic Features */}
                            <div>
                                <label className="text-sm font-medium mb-2 flex items-center justify-between">
                                    <span>Features</span>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => appendFeature({ value: '' })}
                                        size="sm"
                                    >
                                        <PlusIcon className="w-4 h-4 text-white" />
                                    </Button>
                                </label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {featureFields.map((field, index) => (
                                        <div
                                            key={field.id}
                                            className="relative border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-4"
                                        >
                                            {/* Top right action buttons */}
                                            <div className="absolute -top-2 -right-2 flex gap-1">
                                                {index > 0 && (
                                                    <Button
                                                        type="button"
                                                        variant="danger"
                                                        className="z-10"
                                                        size="sm"
                                                        onClick={() => removeFeature(index)}
                                                    >
                                                        <MinusIcon className="w-3 h-3 text-white" />
                                                    </Button>
                                                )}
                                            </div>

                                            {/* Feature input */}
                                            <TextInput
                                                placeholder={`Feature ${index + 1}`}
                                                {...register(`features.${index}.value` as const)}
                                                className="w-full"
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            {/* Dynamic Prices */}
                            <div>
                                <label className="text-sm font-medium mb-2 flex items-center justify-between">
                                    <span>Prices</span>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => append({ currency: '', amount: 0 })}
                                        size="sm"
                                    >
                                        <PlusIcon className="w-4 h-4 text-white" />
                                    </Button>
                                </label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {fields.map((field, index) => (
                                        <div
                                            key={field.id}
                                            className="relative border  rounded-lg shadow-sm bg-white dark:bg-gray-800 p-4"
                                        >
                                            {/* Top right action buttons */}
                                            <div className="absolute -top-2 -right-2 flex gap-1">
                                                {index > 0 && (
                                                    <Button
                                                        type="button"
                                                        variant="danger"
                                                        className="z-10"
                                                        size="sm"
                                                        onClick={() => remove(index)}
                                                    >
                                                        <MinusIcon className="w-3 h-3 text-white" />
                                                    </Button>
                                                )}
                                            </div>

                                            {/* Price inputs */}
                                            <div className="flex gap-3">
                                                <TextInput
                                                    placeholder="Currency (e.g. USD)"
                                                    className="w-28"
                                                    {...register(`pricePairs.${index}.currency` as const, {
                                                        pattern: {
                                                            value: /^[A-Z]{3}$/,
                                                            message: 'Must be 3 uppercase letters',
                                                        },
                                                    })}
                                                />
                                                <TextInput
                                                    type="number"
                                                    placeholder="Amount"
                                                    {...register(`pricePairs.${index}.amount` as const, {
                                                        min: { value: 0, message: 'Must be ≥ 0' },
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                        <Button
                            variant="danger"
                            className="mr-2"
                            type="button"
                            onClick={() => navigate('/admin/packages')}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
};

export default CreatePackage;
