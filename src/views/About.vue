<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="myclick()">点击我会跳转到home</button> 
  </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    myclick () {
      // 可以是对象
      this.$router.push({
        name:"home",
        path:"./Home.vue"
      })
    }
  }
}
</script>