import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/ui/Button';
const Signin = () => {
    const navigate = useNavigate();
    const [authMethod, setAuthMethod] = useState('email');
    const [verificationMethod, setVerificationMethod] = useState('password');
    const { toast } = useToast();
    const location = useLocation();
    const { login, isLoading } = useAuth();
    const from = location.state?.from?.pathname || '/client';
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, } = useForm();
    const toggleAuthMethod = () => {
        setAuthMethod((prev) => (prev === 'email' ? 'phone' : 'email'));
    };
    const onSubmit = async (data) => {
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
            }
            else {
                toast({
                    title: `Login failed`,
                    description: `Please check your credentials`,
                    variant: "error",
                });
            }
        }
        catch (err) {
            setError('email', { type: 'server', message: 'Invalid credentials' });
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [_jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Sign in to your account" }), _jsxs("p", { className: "mt-2 text-center text-sm text-gray-600", children: ["Or", ' ', _jsx(Link, { to: "/signup", className: "font-medium text-green-600 hover:text-green-500", children: "create a new account" })] })] }), _jsx("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: _jsxs("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6", children: [_jsxs("div", { className: "flex rounded-md shadow-sm", children: [_jsx("button", { type: "button", onClick: () => setVerificationMethod('password'), className: verificationMethod === 'password'
                                                ? 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white'
                                                : 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300', children: "Password" }), _jsx("button", { type: "button", onClick: () => setVerificationMethod('otp'), className: verificationMethod === 'otp'
                                                ? 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white'
                                                : 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300', children: "OTP" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: authMethod, className: "block text-sm font-medium text-gray-700", children: authMethod === 'email' ? 'Email address' : 'Phone number' }), _jsxs("div", { className: "mt-1 relative rounded-md shadow-sm", children: [_jsx("input", { type: authMethod === 'email' ? 'email' : 'tel', ...register(authMethod, {
                                                        required: `${authMethod} is required`,
                                                    }), id: authMethod, className: "block w-full pr-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm", placeholder: authMethod === 'email'
                                                        ? 'you@example.com'
                                                        : '+1 (555) 000-0000' }), _jsx("button", { type: "button", onClick: toggleAuthMethod, className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500", children: authMethod === 'email' ? (_jsx(PhoneIcon, { className: "h-5 w-5", "aria-hidden": "true" })) : (_jsx(EnvelopeIcon, { className: "h-5 w-5", "aria-hidden": "true" })) })] }), errors.email && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email.message })), errors.phone && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.phone.message }))] }), verificationMethod === 'password' && (_jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }), _jsx("input", { id: "password", type: "password", ...register('password', {
                                                required: 'Password is required',
                                            }), className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm", placeholder: "Enter your password" }), errors.password && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.password.message }))] })), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { id: "rememberMe", type: "checkbox", ...register('rememberMe'), className: "h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "rememberMe", className: "ml-2 block text-sm text-gray-900", children: "Remember me" })] }), _jsx("div", { className: "text-sm", children: _jsx("a", { href: "#", className: "font-medium text-green-600 hover:text-green-500", children: "Forgot your password?" }) })] }), _jsx(Button, { type: "submit", isLoading: isLoading, className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500", children: "Sign in" })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-300" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-white text-gray-500", children: "Or continue with" }) })] }), _jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [_jsx("div", { children: _jsxs("button", { type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", children: [_jsx(FcGoogle, { className: "h-5 w-5" }), _jsx("span", { className: "ml-2", children: "Google" })] }) }), _jsx("div", { children: _jsx("button", { type: "button", onClick: toggleAuthMethod, className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", children: authMethod === 'email' ? (_jsxs(_Fragment, { children: [_jsx(PhoneIcon, { className: "h-5 w-5 text-gray-500" }), _jsx("span", { className: "ml-2", children: "Phone" })] })) : (_jsxs(_Fragment, { children: [_jsx(EnvelopeIcon, { className: "h-5 w-5 text-gray-500" }), _jsx("span", { className: "ml-2", children: "Email" })] })) }) })] })] })] }) })] }));
};
export default Signin;
