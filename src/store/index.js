/**
 * Vuex 是 Vue 中的一个核心插件
 * 它的作用：管理共享状态，集中式状态管理容器
 * 我们可以把需要共享通信的数据放到这里
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * state：全局共享的状态，类似与组件中的data
   * 在组件中使用 this.$store.state.xxx 进行访问
   */
  state: {
    user: JSON.parse(window.localStorage.getItem('user'))
  },

  /**
   * mutations：用来修改 state 状态
   * mutations是一个函数，函数接收的第1个参数是 state 对象， 其它的都是参数
   */
  mutations: {
    setUser(state, user) {
      state.user = user
      // 为了防止刷新页面丢失用户登录状态，我们应该将数据持久化
      // 这里使用本地存储
      // 注意： 本地存储只能存储字符串，所以这里要用 JSON.stringify 方法将对象转为字符串
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
