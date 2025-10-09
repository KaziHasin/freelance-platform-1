import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';

type UserRole = 'client' | 'freelancer';
type AuthMethod = 'email' | 'phone';
type VerificationMethod = 'password' | 'otp';

interface SignupFormData {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    password?: string;
    terms: boolean;
}

const Signup = () => {
    const [role, setRole] = useState<UserRole>('client');
    const [authMethod, setAuthMethod] = useState<AuthMethod>('email');
    const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('password');

    const { register: registerUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<SignupFormData>();

    const toggleAuthMethod = () => {
        setAuthMethod(prev => (prev === 'email' ? 'phone' : 'email'));
    };

    const onSubmit = async (data: SignupFormData) => {
        try {
            const payload = {
                name: data.firstName + ' ' + data.lastName,
                email: authMethod === 'email' ? data.email : undefined,
                phone: authMethod === 'phone' ? data.phone : undefined,
                password: verificationMethod === 'password' ? data.password : undefined,
                role: role === 'client' ? 'CLIENT' : 'DEVELOPER',
                provider: 'local',
            };

            const response = await registerUser(payload);
            if (response && typeof response !== 'boolean') {
                if (response.user.role === 'CLIENT') {
                    navigate('/client');
                } else if (response.user.role === 'DEVELOPER') {
                    navigate('/developer');
                }
            }
        } catch (error: any) {
            if (error?.data?.details) {
                error.data.details.forEach((err: { field: string; message: string }) => {
                    const fieldName = err.field as keyof SignupFormData;
                    setError(fieldName, {
                        type: 'server',
                        message: err.message,
                    });
                });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {/* Role */}
                        <div className="flex rounded-md shadow-sm">
                            <button
                                type="button"
                                onClick={() => setRole('client')}
                                className={role === 'client'
                                    ? 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white'
                                    : 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300'}
                            >
                                Post Projects
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('freelancer')}
                                className={role === 'freelancer'
                                    ? 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white'
                                    : 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300'}
                            >
                                Find Jobs
                            </button>
                        </div>

                        {/* Verification Method */}
                        <div className="flex rounded-md shadow-sm">
                            <button
                                type="button"
                                onClick={() => setVerificationMethod('password')}
                                className={verificationMethod === 'password'
                                    ? 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white'
                                    : 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300'}
                            >
                                Password
                            </button>
                            <button
                                type="button"
                                onClick={() => setVerificationMethod('otp')}
                                className={verificationMethod === 'otp'
                                    ? 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white'
                                    : 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300'}
                            >
                                OTP
                            </button>
                        </div>

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    {...register('firstName', { required: 'First name is required' })}
                                    className="mt-1 block w-full border rounded-md px-3 py-2"
                                />
                                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    {...register('lastName', { required: 'Last name is required' })}
                                    className="mt-1 block w-full border rounded-md px-3 py-2"
                                />
                                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                            </div>
                        </div>

                        {/* Email / Phone */}
                        <div>
                            <label htmlFor={authMethod} className="block text-sm font-medium text-gray-700">
                                {authMethod === 'email' ? 'Email address' : 'Phone number'}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type={authMethod === 'email' ? 'email' : 'tel'}
                                    id={authMethod}
                                    {...register(authMethod, { required: `${authMethod} is required` })}
                                    className="block w-full border rounded-md px-3 py-2"
                                />
                                {errors[authMethod] && (
                                    <span className="text-red-500 text-sm">{errors[authMethod]?.message}</span>
                                )}
                                <button
                                    type="button"
                                    onClick={toggleAuthMethod}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                >
                                    {authMethod === 'email' ? <PhoneIcon className="h-5 w-5" /> : <EnvelopeIcon className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Password (if password method) */}
                        {verificationMethod === 'password' && (
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', { required: 'Password is required' })}
                                    className="mt-1 block w-full border rounded-md px-3 py-2"
                                />
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div>
                        )}

                        {/* Terms */}
                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                {...register('terms', { required: 'You must accept the terms' })}
                                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                                I agree to the{' '}
                                <a href="#" className="text-green-600 hover:text-green-500">Terms</a> and{' '}
                                <a href="#" className="text-green-600 hover:text-green-500">Privacy Policy</a>
                            </label>
                        </div>
                        {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 rounded-md bg-green-600 text-white"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
