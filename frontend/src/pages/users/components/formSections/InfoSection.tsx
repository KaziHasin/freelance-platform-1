// components/formSections/InfoSection.tsx
import { EmailInput } from '@/components/forms/inputs/EmailInput';
import { FileInput } from '@/components/forms/inputs/FileInput';
import { TextInput } from '@/components/forms/inputs/TextInput';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InfoSectionProps {
    register: UseFormRegister<any>;
    errors: FieldErrors;
}

const InfoSection: React.FC<InfoSectionProps> = ({ register, errors }) => {
    return (
        <div className="mt-2">
            <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700">
                <FormSectionHeader title="User Information" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <TextInput
                        label="Name"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message as string}</p>
                    )}

                    {/* Email */}
                    <EmailInput
                        label="Email"
                        placeholder="john@gmail.com"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message as string}</p>
                    )}

                    {/* Phone */}
                    <TextInput
                        label="Phone"
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                    />
                    {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone.message as string}</p>
                    )}

                    {/* Password */}
                    <TextInput
                        label="Password"
                        placeholder="John Doe"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message as string}</p>
                    )}

                    <TextInput
                        label="Role"
                        placeholder="Role"
                        {...register('role', { required: 'Role is required' })}
                    />
                    {errors.role && (
                        <p className="text-sm text-red-500">{errors.role.message as string}</p>
                    )}

                    {/* Profile Image */}
                    <FileInput
                        label="Profile Image"
                        accept="image/*"
                        placeholder="Upload profile image"
                        {...register('profileImage')}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
