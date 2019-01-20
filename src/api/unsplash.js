import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID bd82f1b43efe200f3314c84717237de1dfcf2aeec73eca72a8dd92f6e46c9e22'
      }
})