<template>
  <div>
    {{$route.params.name}}
    <p>路由传参user：{{$route.params.id}}</p>
  </div>
</template>
<script>
export default {
  data:function(){
    return {

    }
  },
  methods:{

  }
}
</script>

