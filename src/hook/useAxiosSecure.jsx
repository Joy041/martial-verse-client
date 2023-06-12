import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://martial-verse-server-joy041.vercel.app',
});

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('martial-verse-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 403 || error.response.status === 400)) {
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logout, navigate]);

    return [axiosSecure];
}

export default useAxiosSecure;