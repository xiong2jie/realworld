/**
 * 用户相关接口
 */

import request from '@/utils/request'

export const login = ({
  email,
  password
}) => {
  return request({
    method: 'POST', // 请求方法
    url: '/api/users/login', // 请求路径
    data: { // POST 请求体放到 data 中
      user: {
        email,
        password
      }
    }
  })
}
