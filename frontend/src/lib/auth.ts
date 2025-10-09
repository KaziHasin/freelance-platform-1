export const ADMIN_KEY = 'admin_user';

export const getUser = (): any => {
    const userStr = localStorage.getItem(ADMIN_KEY);
    if (userStr) {
        try {
            return JSON.parse(userStr);
        } catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    }
    return null;
};

export const setUser = (user: any): void => {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(user));
};

export const removeUser = (): void => {
    localStorage.removeItem(ADMIN_KEY);
};

export const clearAuth = (): void => {
    removeUser();
};

export const isTokenExpired = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    } catch (error) {
        return true;
    }
};
