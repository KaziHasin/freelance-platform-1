export const ADMIN_KEY = 'admin_user';
export const CLIENT_KEY = 'client_user';
export const getUser = () => {
    const userStr = localStorage.getItem(ADMIN_KEY);
    if (userStr) {
        try {
            return JSON.parse(userStr);
        }
        catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    }
    return null;
};
export const getClient = () => {
    const clientStr = localStorage.getItem(CLIENT_KEY);
    if (clientStr) {
        try {
            return JSON.parse(clientStr);
        }
        catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    }
    return null;
};
export const setUser = (user) => {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(user));
};
export const removeUser = () => {
    localStorage.removeItem(ADMIN_KEY);
};
export const clearAuth = () => {
    removeUser();
};
export const setClient = (client) => {
    localStorage.setItem(CLIENT_KEY, JSON.stringify(client));
};
export const removeClient = () => {
    localStorage.removeItem(CLIENT_KEY);
};
export const clearClientAuth = () => {
    removeClient();
};
export const isTokenExpired = (token) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    }
    catch (error) {
        return true;
    }
};
