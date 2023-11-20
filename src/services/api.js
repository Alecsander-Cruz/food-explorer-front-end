import axios from "axios";

export const api = axios.create({
    baseURL: "https://alecsander-cruz-food-explorer.onrender.com"
})