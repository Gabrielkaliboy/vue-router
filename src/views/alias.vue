<template>
  <div>别名测试
    <p>使用alias和别名aliasTwo都可以跳转到我</p>
    <button @click="myClick">返回重定向</button>
  
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
      this.$router.push("testRedirect")
    }
  }
}
</script>

