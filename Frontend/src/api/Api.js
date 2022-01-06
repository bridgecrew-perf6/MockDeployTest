import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://localhost:8080/api/v1`,
    // timeout: 5000, // default is '0' (no time out)
    // responseType: 'json'
});

// axiosClient.interceptors.request.use(async (config) => {
    
//     const auth = window.btoa(username + " , " + password)
//     if (token !== null && token !== undefined) {
//         config.headers.Authorization = auth;
//     }
//     return config;
// });

// axiosClient.interceptors.request.use(async (config) => {
//     //handle token
//     //if token exists then attach token
//     const token = storage.getToken();
//     if (token !== null && token !== undefined) {
//         config.headers.Authorization = token;
//     }
//     return config;
// });

axiosClient.interceptors.response.use((response) => {
    if (response && response.data !== undefined) {
        //only get data
        return response.data;
    }
    return response;
}, (error) => {
    // handle error
    if (error.response) {
        throw error.response;
    } else if (error.request) {
        throw error.request;
    } else {
        throw error;
    }
});
export default axiosClient;