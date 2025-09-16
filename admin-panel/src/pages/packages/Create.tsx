import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { useCreatePackageMutation } from '@/store/slices/PackageSlice';
import Button from '@/components/ui/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import { CreatePackageRequest } from '@/types/package';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import { TextInput } from '@/components/forms/inputs/TextInput';
import { TextArea } from '@/components/forms/inputs/TextArea';
import { PlusIcon } from '@heroicons/react/24/outline';
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
    } = useForm<CreatePackageRequest & { pricePairs: { currency: string; amount: number }[] }>({
        defaultValues: {
            pricePairs: [{ currency: '', amount: 0 }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pricePairs',
    });

    const onSubmit = async (data: any) => {
        try {
            const prices: Record<string, number> = {};
            data.pricePairs.forEach((pair: { currency: string; amount: number }) => {
                if (pair.currency && pair.amount >= 0) {
                    prices[pair.currency.toUpperCase()] = Number(pair.amount);
                }
            });

            const payload: CreatePackageRequest = {
                code: data.code,
                prices,
                projectsPerMonth: Number(data.projectsPerMonth),
                contactClicksPerProject: Number(data.contactClicksPerProject),
                notes: data.notes,
            };

            await createPackage(payload).unwrap();
            navigate('/packages', { state: 'created' });
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
                                <TextArea
                                    label="Notes"
                                    name="notes"
                                    placeholder="Enter additional details..."
                                    rows={4}
                                    {...register('notes')}
                                />

                            </div>

                            {/* Dynamic Prices */}
                            <div>
                                <label className=" text-sm font-medium mb-2 flex content-between">
                                    <span className='me-1'>
                                        Prices
                                    </span>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => append({ currency: '', amount: 0 })}
                                        size='sm'
                                        className=''
                                    >
                                        <PlusIcon className="w-2 h-2 text-white" />
                                    </Button></label>
                                {fields.map((field, index) => (
                                    <div key={field.id} className="flex items-center gap-3 mb-2">
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
                                            className=""
                                            {...register(`pricePairs.${index}.amount` as const, {
                                                min: { value: 0, message: 'Must be ≥ 0' },
                                            })}
                                        />
                                        {fields.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="danger"
                                                onClick={() => remove(index)}
                                                size='sm'
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
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
};

export default CreatePackage;
