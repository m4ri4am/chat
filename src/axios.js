import store from "./store";
import Axios from "axios";


const axios = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        // content
        "Content-Type": "application/json",
        //  lang
        "language": "en",
        //  Authorization
    },
    
});
axios.interceptors.request.use((config) => {
    config.headers.Authorization = 
    store.state.token ?
    "Bearer " + store.state.token :
    "";

    return config;
});
export default axios;
