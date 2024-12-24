import axios from "axios";
// import { redirect } from "react-router-dom";

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL + "/api",
})

instance.interceptors.request.use((config) => {

})

instance.interceptors.response.use((response) => {

    if (response && response.data !== undefined) {
        // only get data
        return response.data;
    }

    return response;
}, async (error) => {
    throw error
});

export default instance