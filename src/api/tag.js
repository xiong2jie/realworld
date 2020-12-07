/**
 * 接口相关请求
 */

 import request from '@/utils/request'

 export const getTags = () => {
   return request({
     method: 'GET', // 请求方法
     url: '/api/tags' // 请求路径
   })
 }