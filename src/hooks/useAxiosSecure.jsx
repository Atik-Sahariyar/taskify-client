import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000/api/v1',
    baseURL: 'https://taskify-server-ivory.vercel.app/api/v1',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                logOut()
                    .then(() => { 
                        navigate('/signIn')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;