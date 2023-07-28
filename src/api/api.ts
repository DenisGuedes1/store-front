import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-store-s8l5.onrender.com/",
    timeout: 6000
})
