import axios, { AxiosError } from "axios";


const BASE_URL = 'https://cinesage-server.onrender.com'


const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

apiClient.interceptors.request.use((config: any) => {

    const token = localStorage.getItem('CineSageToken');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config
},
    (error: AxiosError) => {

        return Promise.reject(error)
    }

)

apiClient.interceptors.response.use((response: any) => {

    return response
},
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

export default apiClient

