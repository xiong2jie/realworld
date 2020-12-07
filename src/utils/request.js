/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'
import store from '@/store/index'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/' // 设置请求的基础路径，这样就不用每次请求的时候都写了
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  
  const user = store.state.user

  // 如果用户登录，统一往本次请求的请求头中添加用户 token
  if (store.state.user) {
    config.headers.Authorization = `Token ${store.state.user.token}` // 格式以后后端要求为主，注意 Token 右边的空格
  }
  return config
  
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})


export default request