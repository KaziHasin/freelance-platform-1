import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { toggleDarkMode, setPrimaryColor } from '../store/slices/themeSlice';

export const useTheme = () => {
    const dispatch = useDispatch();
    const { isDarkMode, primaryColor } = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        dispatch(toggleDarkMode());
    };

    const changePrimaryColor = (color: string) => {
        dispatch(setPrimaryColor(color));
    };

    return {
        isDarkMode,
        primaryColor,
        toggleTheme,
        changePrimaryColor,
    };
}; 