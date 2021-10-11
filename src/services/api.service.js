import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

const axiosInstance = axios.create(options);

const getPosts = () => {
    return axiosInstance.get('/posts');
}

export {
    getPosts, axiosInstance
};
