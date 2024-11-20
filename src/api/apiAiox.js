import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://xpedent.net/admin/public/api/" ,
    
})

export default axiosInstance