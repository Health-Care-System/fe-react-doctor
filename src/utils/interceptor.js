import axios from "axios";
import Cookies from "js-cookie";

const client = new axios()
client.interceptors.request.use(function (config) {
  const token = Cookies.get('token');
  config.headers['X-API-KEY'] = token;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default client;