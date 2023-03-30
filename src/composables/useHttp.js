// REPO INI BUAT CONFIG AXIOS NYA
import axios from "axios"

export const useHttp = () => {
    const client = axios.create({
        baseURL: import.meta.env.VUE_APP_API_URL || 'http://localhost:8000',
        headers: {
            "Content-Type": "Application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });

    const get = (url, params) => client.get(url, { params });
    const post = (url, data, params) => client.post(url, data, { params });
    const put = (url, data, params) => client.put(url, data, { params });
    const patch = (url, data, params) => client.patch(url, data, { params });
    const destroy = (url, params) => client.delete(url, { params });

    return {
        get,
        post,
        put,
        patch,
        destroy,
    };
};