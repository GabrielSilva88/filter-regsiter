/**
 *  Instalação do axios
 *    npm install axios
 */

import axios from "axios";

const api = axios.create({
    //baseURL:'http://localhost:3333' 192.168.108.71
    baseURL:'http://192.168.108.71:3333'
});

export default api;