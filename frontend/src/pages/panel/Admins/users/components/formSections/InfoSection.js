import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/formSections/InfoSection.tsx
import { EmailInput } from '@/components/forms/inputs/EmailInput';
import { FileInput } from '@/components/forms/inputs/FileInput';
import { TextInput } from '@/components/forms/inputs/TextInput';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
const InfoSection = ({ register, errors }) => {
    return (_jsx("div", { className: "mt-2", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700", children: [_jsx(FormSectionHeader, { title: "User Information" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx(TextInput, { label: "Name", placeholder: "John Doe", ...register('name', { required: 'Name is required' }) }), errors.name && (_jsx("p", { className: "text-sm text-red-500", children: errors.name.message })), _jsx(EmailInput, { label: "Email", placeholder: "john@gmail.com", ...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: 'Invalid email address',
                                },
                            }) }), errors.email && (_jsx("p", { className: "text-sm text-red-500", children: errors.email.message })), _jsx(TextInput, { label: "Phone", placeholder: "+91 98765 43210", ...register('phone') }), errors.phone && (_jsx("p", { className: "text-sm text-red-500", children: errors.phone.message })), _jsx(TextInput, { label: "Password", placeholder: "John Doe", ...register('password', { required: 'Password is required' }) }), errors.password && (_jsx("p", { className: "text-sm text-red-500", children: errors.password.message })), _jsx(TextInput, { label: "Role", placeholder: "Role", ...register('role', { required: 'Role is required' }) }), errors.role && (_jsx("p", { className: "text-sm text-red-500", children: errors.role.message })), _jsx(FileInput, { label: "Profile Image", accept: "image/*", placeholder: "Upload profile image", ...register('profileImage') })] })] }) }));
};
export default InfoSection;
