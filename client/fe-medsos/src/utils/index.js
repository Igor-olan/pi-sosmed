import axios from 'axios';

const APISERVICE = () => axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
})

export const config = (token) => {
    return {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
}