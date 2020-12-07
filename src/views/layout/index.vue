<template>
  <div>
    <!-- 头部 -->
    <app-header />

    <!-- 这里不能写死，它是动态的：首页、发布文章、文章详情...... -->
    <router-view />

    <!-- 底部 -->
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>