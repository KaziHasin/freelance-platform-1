import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
const Signup = () => {
    const [role, setRole] = useState('client');
    const [authMethod, setAuthMethod] = useState('email');
    const [verificationMethod, setVerificationMethod] = useState('password');
    const { register: registerUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setError, } = useForm();
    const toggleAuthMethod = () => {
        setAuthMethod(prev => (prev === 'email' ? 'phone' : 'email'));
    };
    const onSubmit = async (data) => {
        try {
            const payload = {
                name: data.firstName + ' ' + data.lastName,
                email: authMethod === 'email' ? data.email : undefined,
                phone: authMethod === 'phone' ? data.phone : undefined,
                password: verificationMethod === 'password' ? data.password : undefined,
                role: role === 'client' ? 'CLIENT' : 'DEVELOPER',
                provider: 'local',
            };
            const success = await registerUser(payload);
            if (success) {
                navigate('/client');
            }
        }
        catch (error) {
            if (error?.data?.details) {
                error.data.details.forEach((err) => {
                    const fieldName = err.field;
                    setError(fieldName, {
                        type: 'server',
                        message: err.message,
                    });
                });
            }
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [_jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Create your account" }), _jsxs("p", { className: "mt-2 text-center text-sm text-gray-600", children: ["Already have an account?", ' ', _jsx(Link, { to: "/signin", className: "font-medium text-green-600 hover:text-green-500", children: "Sign in" })] })] }), _jsx("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: _jsx("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: _jsxs("form", { className: "space-y-6", onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: "flex rounded-md shadow-sm", children: [_jsx("button", { type: "button", onClick: () => setRole('client'), className: role === 'client'
                                            ? 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white'
                                            : 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300', children: "Post Projects" }), _jsx("button", { type: "button", onClick: () => setRole('freelancer'), className: role === 'freelancer'
                                            ? 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white'
                                            : 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300', children: "Find Jobs" })] }), _jsxs("div", { className: "flex rounded-md shadow-sm", children: [_jsx("button", { type: "button", onClick: () => setVerificationMethod('password'), className: verificationMethod === 'password'
                                            ? 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-green-600 text-white'
                                            : 'flex-1 py-2 px-4 text-sm font-medium rounded-l-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300', children: "Password" }), _jsx("button", { type: "button", onClick: () => setVerificationMethod('otp'), className: verificationMethod === 'otp'
                                            ? 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-green-600 text-white'
                                            : 'flex-1 py-2 px-4 text-sm font-medium rounded-r-md bg-white text-gray-700 hover:text-gray-500 border border-gray-300', children: "OTP" })] }), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: "First name" }), _jsx("input", { id: "firstName", ...register('firstName', { required: 'First name is required' }), className: "mt-1 block w-full border rounded-md px-3 py-2" }), errors.firstName && _jsx("span", { className: "text-red-500 text-sm", children: errors.firstName.message })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: "Last name" }), _jsx("input", { id: "lastName", ...register('lastName', { required: 'Last name is required' }), className: "mt-1 block w-full border rounded-md px-3 py-2" }), errors.lastName && _jsx("span", { className: "text-red-500 text-sm", children: errors.lastName.message })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: authMethod, className: "block text-sm font-medium text-gray-700", children: authMethod === 'email' ? 'Email address' : 'Phone number' }), _jsxs("div", { className: "mt-1 relative rounded-md shadow-sm", children: [_jsx("input", { type: authMethod === 'email' ? 'email' : 'tel', id: authMethod, ...register(authMethod, { required: `${authMethod} is required` }), className: "block w-full border rounded-md px-3 py-2" }), errors[authMethod] && (_jsx("span", { className: "text-red-500 text-sm", children: errors[authMethod]?.message })), _jsx("button", { type: "button", onClick: toggleAuthMethod, className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500", children: authMethod === 'email' ? _jsx(PhoneIcon, { className: "h-5 w-5" }) : _jsx(EnvelopeIcon, { className: "h-5 w-5" }) })] })] }), verificationMethod === 'password' && (_jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }), _jsx("input", { type: "password", id: "password", ...register('password', { required: 'Password is required' }), className: "mt-1 block w-full border rounded-md px-3 py-2" }), errors.password && _jsx("span", { className: "text-red-500 text-sm", children: errors.password.message })] })), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { id: "terms", type: "checkbox", ...register('terms', { required: 'You must accept the terms' }), className: "h-4 w-4 text-green-600 border-gray-300 rounded" }), _jsxs("label", { htmlFor: "terms", className: "ml-2 text-sm text-gray-900", children: ["I agree to the", ' ', _jsx("a", { href: "#", className: "text-green-600 hover:text-green-500", children: "Terms" }), " and", ' ', _jsx("a", { href: "#", className: "text-green-600 hover:text-green-500", children: "Privacy Policy" })] })] }), errors.terms && _jsx("span", { className: "text-red-500 text-sm", children: errors.terms.message }), _jsx("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 rounded-md bg-green-600 text-white", children: "Create Account" })] }) }) })] }));
};
export default Signup;
