<template>
  <div>
    <p>shop</p>
    <div>shop: {{ $route.params.id }}</div>
    <p>router-view 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 router-view。例如，在当前组件的模板添加一个 router-view</p>
    <router-link to="/shop/123/tel">shop tel</router-link><br>
    <router-link to='/shop/123/address'>shop address</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
