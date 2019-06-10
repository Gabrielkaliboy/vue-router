<template>
<!-- 项目的根页面 -->
  <div id="app">
    <div id="nav">
      <!-- 使用router-link组件来导航 -->
      <!-- 通过传入to属性指定链接 -->
      <!-- router-link会被渲染为一个a标签 -->
      <router-link to="/">跳转到Home</router-link> |
      <router-link to="/about">跳转到About</router-link>|
      <router-link to="/user">跳转到User，使用动态路由</router-link>|
      <router-link to="/shop/123">跳转到Shop，使用动态路由</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将会渲染到这里 -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
