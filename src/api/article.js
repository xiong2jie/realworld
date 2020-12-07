/**
 * 文章相关请求模块
 */

 import request from '@/utils/request'

 // 获取所有文章接口
 export const getArticles = () => {
   return request({
     method: 'GET',  // 请求方法
     url: '/api/articles' // 请求路径
   })
 }

 // 获取一篇文章详情接口
 export const getArticleBySlug = slug => {
   return request({
     method: 'GET',  // 请求方法
     url: `/api/articles/${slug}` // 请求路径
   })
 }

 // 创建文件的接口
 export const createArticle = ({
   title,
   description,
   body,
   tagList = []
 }) => {
  return request({
    method: 'POST',  // 请求方法
    url: '/api/articles', // 请求路径
    data: {
      article: {
        title,
        description,
        body,
        tagList
      }
    }
  })
}