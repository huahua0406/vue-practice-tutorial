<template>
  <div>
    Child
  </div>
</template>

<script>
export default {
  name: 'Child',
  beforeCreate () {
    console.log('child beforeCreate')
  },
  created () {
    console.log('child created')
  },
  beforeMount () {
    console.log('child beforeMount')
  },
  mounted () {
    console.log('child mounted')
  },
  beforeDestroy () {
    console.log('child beforeDestroy')
  },
  destroyed () {
    console.log('child destroyed')
  }
}
</script>
