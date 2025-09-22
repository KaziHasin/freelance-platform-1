import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

type UserRole = 'client' | 'freelancer';
type AuthMethod = 'email' | 'phone';
type VerificationMethod = 'password' | 'otp';

const Signup = () => {
    const [role, setRole] = useState<UserRole>('client');
    const [authMethod, setAuthMethod] = useState<AuthMethod>('email');
    const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('password');

    const toggleAuthMethod = () => {
        setAuthMethod(prev => prev === 'email' ? 'phone' : 'email');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account? {' '}
                    <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6">
                        {/* Role Selection */}
                        <div>

                            <div className="flex rounded-md shadow-sm">
                                <button
                                    type="button"
                                    onClick={() => setRole('client')}
                                    className={role === 'client'
                                        ? "flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white"
                                        : "flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300"}
                                >
                                    Post Projects
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole('freelancer')}
                                    className={role === 'freelancer'
                                        ? "flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white"
                                        : "flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300"}
                                >
                                    Find Jobs
                                </button>
                            </div>
                        </div>

                        {/* Verification Method */}
                        <div className="flex rounded-md shadow-sm">
                            <button
                                type="button"
                                onClick={() => setVerificationMethod('password')}
                                className={verificationMethod === 'password'
                                    ? "flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white"
                                    : "flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300"}
                            >
                                Password
                            </button>
                            <button
                                type="button"
                                onClick={() => setVerificationMethod('otp')}
                                className={verificationMethod === 'otp'
                                    ? "flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white"
                                    : "flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300"}
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
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete="family-name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Email/Phone Input */}
                        <div>
                            <label htmlFor={authMethod} className="block text-sm font-medium text-gray-700">
                                {authMethod === 'email' ? 'Email address' : 'Phone number'}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type={authMethod === 'email' ? 'email' : 'tel'}
                                    name={authMethod}
                                    id={authMethod}
                                    autoComplete={authMethod === 'email' ? 'email' : 'tel'}
                                    className="block w-full pr-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder={authMethod === 'email' ? 'you@example.com' : '+1 (555) 000-0000'}
                                />
                                <button
                                    type="button"
                                    onClick={toggleAuthMethod}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                                >
                                    {authMethod === 'email' ? (
                                        <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Password/OTP */}
                        {verificationMethod === 'password' && (
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="new-password"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Enter your password"
                                />
                            </div>
                        )}

                        {/* Terms */}
                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the{' '}
                                <a href="#" className="text-green-600 hover:text-green-500">
                                    Terms {' '}
                                </a>
                                and {' '}
                                <a href="#" className="text-green-600 hover:text-green-500">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* Social Login Options */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <FcGoogle className="h-5 w-5" />
                                        <span className="ml-2">Google</span>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={toggleAuthMethod}
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        {authMethod === 'email' ? (
                                            <>
                                                <PhoneIcon className="h-5 w-5 text-gray-500" />
                                                <span className="ml-2">Phone</span>
                                            </>
                                        ) : (
                                            <>
                                                <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                                                <span className="ml-2">Email</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signup;