<template>
  <div>
    <h2>看地址栏</h2>
    <p>这里的$route.params为{ username: 'jerry', post_id: '123' }</p>
    <p>User：{{ $route.params.username }}</p>
    <p>PostId:{{ $route.params.post_id }}</p>
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
