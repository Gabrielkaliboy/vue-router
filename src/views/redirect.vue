<template>
  <div>
    这是重定向路由的例子
    <p>
      <button @click="myClick">重定向到home页面</button>
    </p>
  </div>
</template>
<script>
export default {
  data:function(){
    return {

    }
  },
  methods:{
    myClick:function(){
      this.$router.push({
        name:"testRedirect"
      })
    }
  }
}
</script>