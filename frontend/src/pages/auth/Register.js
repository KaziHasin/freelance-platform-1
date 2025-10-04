import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Alert from '../../components/ui/Alert';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'jhon@gmail.com',
        password: '123456',
        confirmPassword: '123456'
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setIsLoading(true);
        try {
            // TODO: Implement actual registration logic here
            // For now, we'll just simulate a successful registration
            await new Promise(resolve => setTimeout(resolve, 1000));
            localStorage.setItem('isRegistered', 'true');
            navigate('/login');
        }
        catch (err) {
            setError('Registration failed. Please try again.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900 dark:text-white", children: "Create your account" }), _jsxs("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: ["Or", ' ', _jsx(Link, { to: "/login", className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400", children: "sign in to your account" })] })] }), _jsx(Card, { className: "mt-8", children: _jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [error && (_jsx(Alert, { variant: "error", message: error, dismissible: true, onDismiss: () => setError('') })), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "First name" }), _jsx("div", { className: "mt-1", children: _jsx("input", { id: "firstName", name: "firstName", type: "text", required: true, value: formData.firstName, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" }) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Last name" }), _jsx("div", { className: "mt-1", children: _jsx("input", { id: "lastName", name: "lastName", type: "text", required: true, value: formData.lastName, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" }) })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }), _jsx("div", { className: "mt-1", children: _jsx("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, value: formData.email, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" }) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }), _jsx("div", { className: "mt-1", children: _jsx("input", { id: "password", name: "password", type: "password", required: true, value: formData.password, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" }) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Confirm password" }), _jsx("div", { className: "mt-1", children: _jsx("input", { id: "confirmPassword", name: "confirmPassword", type: "password", required: true, value: formData.confirmPassword, onChange: handleChange, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" }) })] }), _jsx("div", { children: _jsx(Button, { type: "submit", fullWidth: true, isLoading: isLoading, children: "Create account" }) })] }) })] }) }));
};
export default Register;
