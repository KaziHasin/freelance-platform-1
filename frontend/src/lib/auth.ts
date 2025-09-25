export const ADMIN_KEY = 'admin_user';
export const CLIENT_KEY = 'client_user';

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


export const getClient = (): any => {
    const clientStr = localStorage.getItem(CLIENT_KEY);
    if (clientStr) {
        try {
            return JSON.parse(clientStr);
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

export const setClient = (client: any): void => {
    localStorage.setItem(CLIENT_KEY, JSON.stringify(client));
};

export const removeClient = (): void => {
    localStorage.removeItem(CLIENT_KEY);
};

export const clearClientAuth = (): void => {
    removeClient();
};

export const isTokenExpired = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    } catch (error) {
        return true;
    }
};
