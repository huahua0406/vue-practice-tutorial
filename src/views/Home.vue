<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <List @hook:mounted="listMounted"/>
    <Demo1/>
    <div id="example">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from './List'
import HelloWorld from '@/components/HelloWorld.vue'
import Demo1 from '@/components/Demo1.vue'

export default {
  name: 'Home',
  components: {
    List,
    HelloWorld,
    Demo1
  },
  methods: {
    listMounted () {
      console.log('list ====> listMounted')
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
    console.log('home ====> mounted')
  },
  beforeDestroy () {
    console.log('home beforeDestroy')
  },
  destroyed () {
    console.log('home destroyed')
  }
}
</script>
