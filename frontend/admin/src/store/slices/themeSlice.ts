import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    isDarkMode: boolean;
    primaryColor: string;
    sidebarCollapsed: boolean;
}

const initialState: ThemeState = {
    isDarkMode: false,
    primaryColor: 'teal',
    sidebarCollapsed: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setPrimaryColor: (state, action: PayloadAction<string>) => {
            state.primaryColor = action.payload;
        },
        toggleSidebar: (state) => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
        },
    },
});

export const { toggleDarkMode, setPrimaryColor, toggleSidebar } = themeSlice.actions;
export default themeSlice.reducer; 