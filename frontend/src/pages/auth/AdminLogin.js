import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: 'missionaryzeal12@gmail.com',
        password: '123456'
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const { login, isLoading } = useAuth();
    const from = location.state?.from?.pathname || '/admin';
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const success = await login(formData.email, formData.password);
            if (success) {
                toast.success('Login successful!');
                navigate(from, { replace: true });
            }
            else {
                setError('Invalid email or password');
                toast.error('Login failed. Please check your credentials.');
            }
        }
        catch (err) {
            setError('An error occurred during login');
            toast.error('Login failed. Please try again.');
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900 dark:text-white", children: "Sign in to your account" }), _jsxs("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: ["Or", ' ', _jsx(Link, { to: "/register", className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400", children: "create a new account" })] })] }), _jsx(Card, { className: "mt-8", children: _jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [error && (_jsx(Alert, { variant: "error", message: error, dismissible: true, onDismiss: () => setError('') })), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }), _jsx("div", { className: "mt-1", children: _jsx("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, value: formData.email, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" }) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }), _jsxs("div", { className: "mt-1 relative", children: [_jsx("input", { id: "password", name: "password", type: showPassword ? 'text' : 'password', autoComplete: "current-password", required: true, value: formData.password, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white pr-10" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 dark:text-gray-300", tabIndex: -1, children: showPassword ? (_jsx(EyeSlashIcon, { className: "h-5 w-5", "aria-hidden": "true" })) : (_jsx(EyeIcon, { className: "h-5 w-5", "aria-hidden": "true" })) })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }), _jsx("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: "Remember me" })] }), _jsx("div", { className: "text-sm", children: _jsx(Link, { to: "/forgot-password", className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400", children: "Forgot your password?" }) })] }), _jsx("div", { children: _jsx(Button, { type: "submit", fullWidth: true, isLoading: isLoading, children: "Sign in" }) })] }) })] }) }));
};
export default Login;
