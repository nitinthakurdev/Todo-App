import axios from "axios";
export const AxiosHandler = axios.create({
    baseURL:process.env.EXPO_PUBLIC_API_URL,
})