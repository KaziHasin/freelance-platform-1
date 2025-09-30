import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/admin/PageLayout';
import Button from '@/components/ui/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import { useGetPackageQuery, useUpdatePackageMutation } from '@/store/slices/PackageSlice';
import { PackageFormValues, UpdatePackageRequest } from '@/types/package';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import { TextInput } from '@/components/forms/inputs/TextInput';
import { TextArea } from '@/components/forms/inputs/TextArea';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { SelectBox } from '@/components/forms/inputs/SelectBox';
import { CheckboxInput } from '@/components/forms/inputs/CheckboxInput';

const EditPackage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data: pkg, isLoading: isFetching } = useGetPackageQuery(id!);
    const [updatePackage, { isLoading }] = useUpdatePackageMutation();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
        setError,
        watch,
    } = useForm<PackageFormValues>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pricePairs',
    });

    const {
        fields: featureFields,
        append: appendFeature,
        remove: removeFeature,
    } = useFieldArray({
        control,
        name: 'features',
    });

    useEffect(() => {
        if (pkg) {
            reset({
                code: pkg.code,
                projectsPerMonth: pkg.projectsPerMonth ?? undefined,
                contactClicksPerProject: pkg.contactClicksPerProject ?? undefined,
                unlimitedProjects: pkg.projectsPerMonth === null,
                unlimitedClicks: pkg.contactClicksPerProject === null,
                notes: pkg.notes,
                shortDescription: pkg.shortDescription,
                footerText: pkg.footerText,
                badge: pkg.badge,
                pricePairs: Object.entries(pkg.prices).map(([currency, amount]) => ({
                    currency,
                    amount: Number(amount),
                })),
                features: (pkg.features || []).map(f => ({ value: f })),
            });
        }
    }, [pkg, reset]);

    const onSubmit = async (data: PackageFormValues) => {
        try {
            const prices: Record<string, number> = {};
            data.pricePairs.forEach(({ currency, amount }) => {
                if (currency && amount >= 0) {
                    prices[currency.toUpperCase()] = Number(amount);
                }
            });

            const features = (data.features || []).map(
                (f: { value: string }) => f.value
            );


            const payload: UpdatePackageRequest = {
                id: id!,
                code: data.code,
                prices,
                projectsPerMonth: data.unlimitedProjects ? null : Number(data.projectsPerMonth),
                contactClicksPerProject: data.unlimitedClicks ? null : Number(data.contactClicksPerProject),
                notes: data.notes,
                shortDescription: data.shortDescription,
                footerText: data.footerText,
                badge: data.badge,
                features,
            };

            console.log(payload.prices);

            await updatePackage(payload).unwrap();
            navigate('/admin/packages', { state: 'updated' });
        } catch (error: any) {
            if (error?.data?.details) {
                const serverErrors = error.data.details;
                serverErrors.forEach((err: { field: string; message: string }) => {
                    const fieldName = err.field.replace(/^body\./, '') as keyof UpdatePackageRequest;
                    setError(fieldName as any, {
                        type: 'server',
                        message: err.message,
                    });
                });
            }
        }
    };

    const breadcrumbs = [
        { label: 'Manage Packages', path: '/packages' },
        { label: 'Edit Package', path: `/packages/${id}/edit` },
    ];

    if (isFetching) return <div>Loading...</div>;

    return (
        <PageLayout title="Edit Package" breadcrumbs={breadcrumbs}>
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
                                    {...register('code')}
                                    options={[
                                        { label: 'FREE', value: 'FREE' },
                                        { label: 'BASIC', value: 'BASIC' },
                                        { label: 'STANDARD', value: 'STANDARD' },
                                        { label: 'PREMIUM', value: 'PREMIUM' },
                                    ]}
                                />
                                {errors.code && (
                                    <span className="text-sm text-red-500">{errors.code.message}</span>
                                )}
                            </div>

                            {/* Projects per month */}
                            <div>
                                <div className="flex items-center justify-between gap-3">
                                    <label className="text-sm font-medium mb-1 block">Projects Per Month</label>
                                    <CheckboxInput label="Unlimited Projects" {...register('unlimitedProjects')} />
                                </div>

                                {!watch('unlimitedProjects') && (
                                    <TextInput
                                        placeholder="Enter Projects Per Month"
                                        {...register('projectsPerMonth')}
                                    />
                                )}

                                {errors.projectsPerMonth && (
                                    <span className="text-sm text-red-500">
                                        {errors.projectsPerMonth.message}
                                    </span>
                                )}
                            </div>

                            {/* Contact clicks */}
                            <div>
                                <div className="flex items-center justify-between gap-3">
                                    <label className="text-sm font-medium mb-1 block">
                                        Contact Clicks Per Project
                                    </label>
                                    <CheckboxInput label="Unlimited Clicks" {...register('unlimitedClicks')} />
                                </div>

                                {!watch('unlimitedClicks') && (
                                    <TextInput
                                        placeholder="Enter Contact Clicks Per Project"
                                        {...register('contactClicksPerProject')}
                                    />
                                )}

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
                                    {...register('shortDescription')}
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
                                    {...register('footerText')}
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
                                    {...register('badge')}
                                />
                                {errors.badge && (
                                    <span className="text-sm text-red-500">{errors.badge.message}</span>
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

                            {/* Features */}
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

                                            <TextInput
                                                placeholder={`Feature ${index + 1}`}
                                                {...register(`features.${index}.value` as const)}
                                                className="w-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Prices */}
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
                                            className="relative border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-4"
                                        >
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

                                            <div className="flex gap-3">
                                                <TextInput
                                                    placeholder="Currency (e.g. USD)"
                                                    className="w-28"
                                                    {...register(`pricePairs.${index}.currency` as const, {
                                                        pattern: {
                                                            value: /^[A-Z]{1,5}$/,
                                                            message: 'Must be 1 to 5 uppercase letters',
                                                        },
                                                    })}
                                                />

                                                <TextInput
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
                        <Button type="submit" isLoading={isLoading}>
                            Update
                        </Button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
};

export default EditPackage;
