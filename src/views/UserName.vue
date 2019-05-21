<template>
  <div>
    <h2>看地址栏</h2>
    <p>这里的$route.params为{ username: 'jerry' }</p>
    <p>User：{{ $route.params.username }}</p>
    <hr>
    <p>
      当前的$route.path为{{ $route.path }}
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {

  }
}
</script>
