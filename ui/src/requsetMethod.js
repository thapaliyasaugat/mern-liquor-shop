import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
// console.log(localStorage.getItem('aToken'))
const TOKEN = localStorage.getItem('aToken') || null;


export const publicRequest = axios.create({ baseURL: BASE_URL, })

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});

