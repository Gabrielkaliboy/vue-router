<template>
  <div class="home">
    <hr>
    <p>这里是router-view 渲染的home</p>
    <button @click="btn1">点击我会跳转到About</button>
    <button @click="btn3" title="我是重定向路由">redirect</button>
    <button @click="btn2">动画控制</button>
    <hr>
    <transition name="fade">
      <p v-if="display">我是动画控制的部分</p>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data:function(){
    return {
      display:false
    }
  },
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
    btn3: function () {
      this.$router.push({
        path: 'redirect'
      })
    },
    btn2:function(){
      this.display=!this.display
    }
  }
}
</script>
<style>
.home{
  /* border:1px solid #f00; */
}
button{
  margin-right: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
