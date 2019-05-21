<template>
  <div>
    <p>一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params</p>
    <router-link to="/user/jerry"><p>跳转到"http://localhost:8080/user/jerry"</p></router-link>
    <router-link to="/user/jerry/post/123"><p>跳转到"http://localhost:8080/user/jerry/post/123"</p></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {
      console.log('User.vue中的to和from')
      console.log(to, from)
    }
  }
}
</script>
