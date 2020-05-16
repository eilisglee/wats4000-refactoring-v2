import axios from 'axios';

export const API = axios.create({
    baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    config.params.APPID = 'a7f25514d94d5be513ccaf707dc13b1c';
    config.params.units = 'imperial';
    return config;
}, function (error) {
    return Promise.reject(error);
});