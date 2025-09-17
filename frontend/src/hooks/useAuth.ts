import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { setCredentials, logout as logoutAction, setLoading, updateUser } from '@/store/slices/authSlice';
import { useLoginMutation, useLogoutMutation } from '@/store/slices/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, isLoading } = useSelector((state: RootState) => state.auth);

    const [loginMutation] = useLoginMutation();
    const [logoutMutation] = useLogoutMutation();

    const login = async (email: string, password: string): Promise<boolean> => {
        dispatch(setLoading(true));

        try {
            const response = await loginMutation({ email, password }).unwrap();

            dispatch(setCredentials({
                user: response.user
            }));
            return true;
        } catch (error) {
            dispatch(setLoading(false));
            return false;
        }
    };

    const logout = async () => {
        try {

            if (user) {
                await logoutMutation().unwrap();
                console.log('Server logout successful');
            } else {
                console.log('No token found, skipping server logout');
            }
        } catch (error) {
            console.error('Server logout failed:', error);
        } finally {
            dispatch(logoutAction());
            console.log('Local logout completed');
        }
    };
    const updateUserProfile = (userData: any) => {
        dispatch(updateUser(userData));
    };

    return {
        user,
        login,
        logout,
        isLoading,
        updateUserProfile,
    };
}; 