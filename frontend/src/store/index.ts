import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './slices/authSlice';
import { userApi } from './slices/userSlice';
import { clientApi } from './slices/ClientSlice';
import { developerApi } from './slices/DeveloperSlice';
import { packageApi } from './slices/PackageSlice';
import { skillApi } from './slices/SkillSlice';
import { projectApi } from './slices/ProjectSlice';
import { paymentApi } from './slices/PaymentSlice';
import { subscriptionApi } from './slices/SubscriptionSlice';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,
        [developerApi.reducerPath]: developerApi.reducer,
        [packageApi.reducerPath]: packageApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [skillApi.reducerPath]: skillApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            clientApi.middleware,
            developerApi.middleware,
            packageApi.middleware,
            paymentApi.middleware,
            skillApi.middleware,
            projectApi.middleware,
            subscriptionApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



