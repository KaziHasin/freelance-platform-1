import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import { useGetPackageQuery, useUpdatePackageMutation } from '@/store/slices/PackageSlice';
import { PackageFormValues, UpdatePackageRequest } from '@/types/package';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import { TextInput } from '@/components/forms/inputs/TextInput';
import { TextArea } from '@/components/forms/inputs/TextArea';
import { PlusIcon } from '@heroicons/react/24/outline';
import { SelectBox } from '@/components/forms/inputs/SelectBox';

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
    } = useForm<PackageFormValues>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pricePairs',
    });

    useEffect(() => {
        if (pkg) {
            reset({
                code: pkg.code,
                projectsPerMonth: pkg.projectsPerMonth,
                contactClicksPerProject: pkg.contactClicksPerProject,
                notes: pkg.notes,
                pricePairs: Object.entries(pkg.prices).map(([currency, amount]) => ({
                    currency,
                    amount: Number(amount),
                })),
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

            const payload: UpdatePackageRequest = {
                id: id!,
                code: data.code,
                prices,
                projectsPerMonth: Number(data.projectsPerMonth),
                contactClicksPerProject: Number(data.contactClicksPerProject),
                notes: data.notes,
            };

            await updatePackage(payload).unwrap();
            navigate("/packages", { state: 'updated' });
        } catch (error) {
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
                                    required
                                    {...register('contactClicksPerProject')}
                                />
                                {errors.contactClicksPerProject && (
                                    <span className="text-sm text-red-500">
                                        {errors.contactClicksPerProject.message}
                                    </span>
                                )}
                            </div>
                            {/* Notes */}
                            <div>
                                <TextArea label="Notes" {...register('notes')} rows={4} />
                            </div>

                            {/* Dynamic Prices */}
                            <div>
                                <label className="text-sm font-medium mb-2 flex ">
                                    <span className='me-1'>Prices</span>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => append({ currency: '', amount: 0 })}
                                        size="sm"
                                    >
                                        <PlusIcon className="w-2 h-2 text-white" />
                                    </Button>
                                </label>
                                {fields.map((field, index) => (
                                    <div key={field.id} className="flex items-center gap-3 mb-2">
                                        <TextInput
                                            placeholder="Currency"
                                            className="w-28"
                                            {...register(`pricePairs.${index}.currency` as const)}
                                        />
                                        <TextInput
                                            type="number"
                                            placeholder="Amount"
                                            {...register(`pricePairs.${index}.amount` as const)}
                                        />
                                        {fields.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="danger"
                                                onClick={() => remove(index)}
                                                size="sm"
                                            >
                                                -
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                        <Button
                            variant="danger"
                            className="mr-2"
                            type="button"
                            onClick={() => navigate('/packages')}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? 'Updating...' : 'Update'}
                        </Button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
};

export default EditPackage;
