import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sitechris-geobejt3ca-ew.a.run.app',
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;