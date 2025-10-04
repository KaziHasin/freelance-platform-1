import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/admin/PageLayout';
import Button from '@/components/ui/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import { useGetPackageQuery, useUpdatePackageMutation } from '@/store/slices/PackageSlice';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import { TextInput } from '@/components/forms/inputs/TextInput';
import { TextArea } from '@/components/forms/inputs/TextArea';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { SelectBox } from '@/components/forms/inputs/SelectBox';
import { CheckboxInput } from '@/components/forms/inputs/CheckboxInput';
const EditPackage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: pkg, isLoading: isFetching } = useGetPackageQuery(id);
    const [updatePackage, { isLoading }] = useUpdatePackageMutation();
    const { register, handleSubmit, control, reset, formState: { errors }, setError, watch, } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pricePairs',
    });
    const { fields: featureFields, append: appendFeature, remove: removeFeature, } = useFieldArray({
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
    const onSubmit = async (data) => {
        try {
            const prices = {};
            data.pricePairs.forEach(({ currency, amount }) => {
                if (currency && amount >= 0) {
                    prices[currency.toUpperCase()] = Number(amount);
                }
            });
            const features = (data.features || []).map((f) => ({ value: f.value }));
            const payload = {
                id: id,
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
        }
        catch (error) {
            if (error?.data?.details) {
                const serverErrors = error.data.details;
                serverErrors.forEach((err) => {
                    const fieldName = err.field.replace(/^body\./, '');
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
        { label: 'Edit Package', path: `/packages/${id}/edit` },
    ];
    if (isFetching)
        return _jsx("div", { children: "Loading..." });
    return (_jsx(PageLayout, { title: "Edit Package", breadcrumbs: breadcrumbs, children: _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs("div", { className: "mt-2", children: [_jsxs("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: [_jsx(FormSectionHeader, { title: "Package Information" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx(SelectBox, { label: "Code", required: true, ...register('code'), options: [
                                                    { label: 'FREE', value: 'FREE' },
                                                    { label: 'BASIC', value: 'BASIC' },
                                                    { label: 'STANDARD', value: 'STANDARD' },
                                                    { label: 'PREMIUM', value: 'PREMIUM' },
                                                ] }), errors.code && (_jsx("span", { className: "text-sm text-red-500", children: errors.code.message }))] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between gap-3", children: [_jsx("label", { className: "text-sm font-medium mb-1 block", children: "Projects Per Month" }), _jsx(CheckboxInput, { label: "Unlimited Projects", ...register('unlimitedProjects') })] }), !watch('unlimitedProjects') && (_jsx(TextInput, { placeholder: "Enter Projects Per Month", ...register('projectsPerMonth') })), errors.projectsPerMonth && (_jsx("span", { className: "text-sm text-red-500", children: errors.projectsPerMonth.message }))] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between gap-3", children: [_jsx("label", { className: "text-sm font-medium mb-1 block", children: "Contact Clicks Per Project" }), _jsx(CheckboxInput, { label: "Unlimited Clicks", ...register('unlimitedClicks') })] }), !watch('unlimitedClicks') && (_jsx(TextInput, { placeholder: "Enter Contact Clicks Per Project", ...register('contactClicksPerProject') })), errors.contactClicksPerProject && (_jsx("span", { className: "text-sm text-red-500", children: errors.contactClicksPerProject.message }))] }), _jsxs("div", { children: [_jsx(TextInput, { label: "Short Description", placeholder: "Enter short description", required: true, ...register('shortDescription') }), errors.shortDescription && (_jsx("span", { className: "text-sm text-red-500", children: errors.shortDescription.message }))] }), _jsxs("div", { children: [_jsx(TextInput, { label: "Footer Text", placeholder: "Enter footer text", required: true, ...register('footerText') }), errors.footerText && (_jsx("span", { className: "text-sm text-red-500", children: errors.footerText.message }))] }), _jsxs("div", { children: [_jsx(TextInput, { label: "Badge", placeholder: "Enter badge text", ...register('badge') }), errors.badge && (_jsx("span", { className: "text-sm text-red-500", children: errors.badge.message }))] }), _jsx("div", { className: "md:col-span-2", children: _jsx(TextArea, { label: "Notes", name: "notes", placeholder: "Enter additional details...", rows: 4, ...register('notes') }) }), _jsxs("div", { children: [_jsxs("label", { className: "text-sm font-medium mb-2 flex items-center justify-between", children: [_jsx("span", { children: "Features" }), _jsx(Button, { type: "button", variant: "primary", onClick: () => appendFeature({ value: '' }), size: "sm", children: _jsx(PlusIcon, { className: "w-4 h-4 text-white" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: featureFields.map((field, index) => (_jsxs("div", { className: "relative border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-4", children: [_jsx("div", { className: "absolute -top-2 -right-2 flex gap-1", children: index > 0 && (_jsx(Button, { type: "button", variant: "danger", className: "z-10", size: "sm", onClick: () => removeFeature(index), children: _jsx(MinusIcon, { className: "w-3 h-3 text-white" }) })) }), _jsx(TextInput, { placeholder: `Feature ${index + 1}`, ...register(`features.${index}.value`), className: "w-full" })] }, field.id))) })] }), _jsxs("div", { children: [_jsxs("label", { className: "text-sm font-medium mb-2 flex items-center justify-between", children: [_jsx("span", { children: "Prices" }), _jsx(Button, { type: "button", variant: "primary", onClick: () => append({ currency: '', amount: 0 }), size: "sm", children: _jsx(PlusIcon, { className: "w-4 h-4 text-white" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: fields.map((field, index) => (_jsxs("div", { className: "relative border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-4", children: [_jsx("div", { className: "absolute -top-2 -right-2 flex gap-1", children: index > 0 && (_jsx(Button, { type: "button", variant: "danger", className: "z-10", size: "sm", onClick: () => remove(index), children: _jsx(MinusIcon, { className: "w-3 h-3 text-white" }) })) }), _jsxs("div", { className: "flex gap-3", children: [_jsx(TextInput, { placeholder: "Currency (e.g. USD)", className: "w-28", ...register(`pricePairs.${index}.currency`, {
                                                                        pattern: {
                                                                            value: /^[A-Z]{1,5}$/,
                                                                            message: 'Must be 1 to 5 uppercase letters',
                                                                        },
                                                                    }) }), _jsx(TextInput, { placeholder: "Amount", ...register(`pricePairs.${index}.amount`, {
                                                                        min: { value: 0, message: 'Must be ≥ 0' },
                                                                    }) })] })] }, field.id))) })] })] })] }), _jsxs("div", { className: "pt-6 flex justify-end", children: [_jsx(Button, { variant: "danger", className: "mr-2", type: "button", onClick: () => navigate('/admin/packages'), children: "Cancel" }), _jsx(Button, { type: "submit", isLoading: isLoading, children: "Update" })] })] }) }) }));
};
export default EditPackage;
