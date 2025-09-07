import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './slices/authSlice';
import { userApi } from './slices/userSlice';
import { clientApi } from './slices/ClientSlice';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            clientApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



