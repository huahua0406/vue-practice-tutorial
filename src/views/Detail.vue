<template>
  <div class="detail">
    <h1>This is an detail page</h1>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id'],
  created () {
    console.log(this.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
