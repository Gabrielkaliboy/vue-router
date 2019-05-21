<template>
  <div class="home">
    <p>home</p>
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
    }
  }
}
</script>
