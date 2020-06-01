<template>
  <div>
    list
  </div>
</template>

<script>
export default {
  naem: 'List',
  beforeCreate () {
    console.log('list beforeCreate')
  },
  created () {
    console.log('list created')
  },
  beforeMount () {
    console.log('list beforeMount')
  },
  mounted () {
    console.log('list mounted')
  },
  beforeDestroy () {
    console.log('list beforeDestroy')
  },
  destroyed () {
    console.log('list destroyed')
  }
}
</script>
