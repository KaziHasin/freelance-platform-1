import { createSlice } from '@reduxjs/toolkit';
const initialState = {
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
        setPrimaryColor: (state, action) => {
            state.primaryColor = action.payload;
        },
        toggleSidebar: (state) => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
        },
    },
});
export const { toggleDarkMode, setPrimaryColor, toggleSidebar } = themeSlice.actions;
export default themeSlice.reducer;
