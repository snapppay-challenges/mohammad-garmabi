import axios from 'axios';
import { requestInterceptor, responseInterceptor } from './config/Interceptors';

const apis = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apis.interceptors.request.use(requestInterceptor.onFulfilled, requestInterceptor.onRejected);
apis.interceptors.response.use(responseInterceptor.onFulfilled, responseInterceptor.onRejected);

export default apis;
