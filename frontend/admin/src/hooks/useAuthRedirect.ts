import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const useAuthRedirect = (redirectTo: string = '/dashboard') => {
    const { isAuthenticated, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate(redirectTo, { replace: true });
        }
    }, [isAuthenticated, isLoading, navigate, redirectTo]);

    return { isAuthenticated, isLoading };
}; 