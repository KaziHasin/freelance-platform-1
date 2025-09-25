import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

type AuthMethod = 'email' | 'phone';
type VerificationMethod = 'password' | 'otp';

type SigninFormData = {
    email?: string;
    phone?: string;
    password?: string;
    rememberMe: boolean;
};

const Signin = () => {
    const navigate = useNavigate();
    const [authMethod, setAuthMethod] = useState<AuthMethod>('email');
    const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('password');
    const { toast } = useToast();
    const location = useLocation();
    const { login, isLoading } = useAuth();
    const from = location.state?.from?.pathname || '/client';


    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<SigninFormData>();

    const toggleAuthMethod = () => {
        setAuthMethod((prev) => (prev === 'email' ? 'phone' : 'email'));
    };

    const onSubmit = async (data: SigninFormData) => {
        try {
            const payload = {
                email: authMethod === 'email' ? data.email : undefined,
                phone: authMethod === 'phone' ? data.phone : undefined,
                password: verificationMethod === 'password' ? data.password : undefined,
                rememberMe: data.rememberMe,
            };

            const success = await login(data.email, data.password);

            if (success) {
                toast({
                    title: `Login Succeed`,
                    description: `Login successfully`,
                    variant: "success",
                });
                navigate(from, { replace: true });
            } else {
                toast({
                    title: `Login failed`,
                    description: `Please check your credentials`,
                    variant: "error",
                });

            }
        } catch (err: any) {
            setError('email', { type: 'server', message: 'Invalid credentials' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <Link
                        to="/signup"
                        className="font-medium text-green-600 hover:text-green-500"
                    >
                        create a new account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Verification Method Tabs */}
                        <div className="flex rounded-md shadow-sm">
                            <button
                                type="button"
                                onClick={() => setVerificationMethod('password')}
                                className={
                                    verificationMethod === 'password'
                                        ? 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white'
                                        : 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300'
                                }
                            >
                                Password
                            </button>
                            <button
                                type="button"
                                onClick={() => setVerificationMethod('otp')}
                                className={
                                    verificationMethod === 'otp'
                                        ? 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white'
                                        : 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300'
                                }
                            >
                                OTP
                            </button>
                        </div>

                        {/* Email/Phone Input */}
                        <div>
                            <label
                                htmlFor={authMethod}
                                className="block text-sm font-medium text-gray-700"
                            >
                                {authMethod === 'email' ? 'Email address' : 'Phone number'}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type={authMethod === 'email' ? 'email' : 'tel'}
                                    {...register(authMethod, {
                                        required: `${authMethod} is required`,
                                    })}
                                    id={authMethod}
                                    className="block w-full pr-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder={
                                        authMethod === 'email'
                                            ? 'you@example.com'
                                            : '+1 (555) 000-0000'
                                    }
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
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Password field only for password method */}
                        {verificationMethod === 'password' && (
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Enter your password"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            {isSubmitting ? 'Signing in...' : 'Sign in'}
                        </button>
                    </form>

                    {/* Social login */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
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
    );
};

export default Signin;
