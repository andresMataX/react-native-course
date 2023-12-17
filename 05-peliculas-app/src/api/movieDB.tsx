import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'babacd449d096cc9e08ec9b85af0b254',
        language: 'es-ES'
    }
})

export default movieDB;