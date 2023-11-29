import axios from "axios";
import Cookies from "js-cookie";

const client = axios.create();

client.interceptors.request.use(function (config) {
  const token = Cookies.get('token');
  config.headers['X-API-KEY'] = `Bearer ${token}`
  config.headers.Authorization = `Bearer ${token}`
  config.baseURL = import.meta.env.VITE_BASEURL;

  return config;
}, function (error) {
  return Promise.reject(error);
})

client.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    const { status } = error.response;
    if (status === 401) {
      Cookies.remove('token');
    }
  }

  return Promise.reject(error);
});

export default client;