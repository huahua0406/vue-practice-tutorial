<template>
  <div class="demo">
    <div class="block">
      <!-- https://router.vuejs.org/zh/guide/essentials/passing-props.html -->
      <h2>路由props传参: {{id}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo2',
  props: ['id'],
  data () {
    return {}
  },
  created () {
    console.log(this.id)
  }
}
</script>

<style scoped lang="scss">

</style>
