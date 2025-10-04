import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout as logoutAction, setLoading, updateUser, useRegisterMutation } from '@/store/slices/authSlice';
import { useLoginMutation, useLogoutMutation } from '@/store/slices/authSlice';
export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.auth);
    const [loginMutation] = useLoginMutation();
    const [registerMutation] = useRegisterMutation();
    const [logoutMutation] = useLogoutMutation();
    const login = async (email, password) => {
        dispatch(setLoading(true));
        try {
            const response = await loginMutation({ email, password }).unwrap();
            dispatch(setCredentials({
                user: response.user
            }));
            return true;
        }
        catch (error) {
            dispatch(setLoading(false));
            return false;
        }
    };
    const register = async (data) => {
        dispatch(setLoading(true));
        try {
            const response = await registerMutation(data).unwrap();
            dispatch(setCredentials({
                user: response.user
            }));
            return true;
        }
        catch (error) {
            dispatch(setLoading(false));
            return false;
        }
    };
    const logout = async () => {
        try {
            if (user) {
                await logoutMutation().unwrap();
                console.log('Server logout successful');
            }
            else {
                console.log('No token found, skipping server logout');
            }
        }
        catch (error) {
            console.error('Server logout failed:', error);
        }
        finally {
            dispatch(logoutAction());
            dispatch(setLoading(false));
            console.log('Local logout completed');
        }
    };
    const updateUserProfile = (userData) => {
        dispatch(updateUser(userData));
    };
    return {
        user,
        login,
        register,
        logout,
        isLoading,
        updateUserProfile,
    };
};
