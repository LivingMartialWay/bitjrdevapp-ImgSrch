import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 53xAgqqC573mbSO-enHIaYzJE5UvmemV8GF-aKfnVPE'
  }
});
