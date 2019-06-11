<template>
  <div>
    这是重定向路由的例子
    <p>
      <button @click="myClick">重定向到home页面</button>
      <button @click="myClick1">别名测试：跳转alias</button>
      <button @click="myClick2">别名测试：跳转aliasTwo</button>


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
    },
    myClick1:function(){
      this.$router.push('alias')
    },
    myClick2:function(){
      this.$router.push('aliasTwo')
    }
  }
}
</script>