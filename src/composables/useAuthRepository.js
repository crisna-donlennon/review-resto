// REPO INI UNTUK MENG-CONNECT HTTP KE SERVER
import { useHttp } from "./useHttp";

export const useAuthRepository = () => {
    const http = useHttp();

    const login = (credentials) => {
        return http.post("/api/auth/login", credentials);
    }

    const register = (credentials) => {
        return http.post("/api/auth/register", credentials);
    }

    const logout = () => {
        return http.get("/api/auth/logout");
    }

    const profile = () => {
        return http.get("/api/auth/profile");
    }

    return {
        login,
        logout,
        profile,
        register,
    };
};