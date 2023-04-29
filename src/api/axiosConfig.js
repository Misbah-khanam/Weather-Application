import axios from 'axios' ;

export default axios.create({
    baseURL: "https://weather-backend-api.onrender.com",
});