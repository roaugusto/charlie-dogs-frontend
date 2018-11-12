import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3000/api'
    baseURL: 'https://backend-tbzkanwvqy.now.sh/api'
})

export default api