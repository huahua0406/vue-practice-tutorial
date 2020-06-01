<template>
  <div>
    <h3>home</h3>
    <list @hook:mounted="listMounted" />
  </div>
</template>

<script>
import List from './List'

export default {
  name: 'about',
  components: {
    List
  },
  methods: {
    listMounted () {
      console.log('------------ listMounted')
    }
  },
  beforeCreate () {
    console.log('home beforeCreate')
  },
  created () {
    console.log('home created')
  },
  beforeMount () {
    console.log('home beforeMount')
  },
  mounted () {
    console.log('home mounted')
  },
  beforeDestroy () {
    console.log('home beforeDestroy')
  },
  destroyed () {
    console.log('home destroyed')
  }
}
</script>
