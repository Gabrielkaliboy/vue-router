<template>
  <div class="home">
    <p>home</p>
    <button @click="btn1">点击我会跳转到About</button>
    <button @click="btn2">点击我会跳转到About</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    btn1: function () {
      // 可以是字符串
      this.$router.push('about')
    },
    btn2: function () {
      // 可以是对象
      this.$router.push({
        path: 'home'
      })
    }
  }
}
</script>
