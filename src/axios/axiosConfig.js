/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-14 10:55:56
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-14 15:22:41
 * @FilePath: \react\my-app\src\utils\request.js
 */
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create();
instance.defaults.timeout = 2500;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem('ACCESS_TOKEN')
  const role = localStorage.getItem('ACCESS_ROLE')
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
      config.headers['Session-Id'] = token
      config.headers['role'] = role || 'common'
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// v 

axios.interceptors.response.use(function (response) {
  // Do something with response data
  if(response.data.code === '0'){
      return Promise.resolve(response.data)
  }else if(response.msg || response.data.msg) {
      return Promise.reject(response.data)
  }else if(response.status == 200 && response.data){
      // 这里是处理文件下载,后台返回的是二进制流,没有code == 0的字段, 文件流的话,返回的时候将最原始的返回数据,可以在响应头中获取到文件的类型
      return Promise.resolve(response)
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default instance