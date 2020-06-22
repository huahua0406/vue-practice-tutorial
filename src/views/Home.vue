<template>
  <div class="home">
    <List @hook:mounted="listMounted"/>
    <ul id="example">
      <li>
        <router-link to="/">生命周期</router-link>
      </li>
      <li>
        <router-link to="/demo1">debounce使用</router-link>
      </li>
      <li>
        <router-link to="/demo2/123">路由props传参使用</router-link>
      </li>
      <li>
        <router-link to="/demo3">搜索组件</router-link>
      </li>
      <li>
        <router-link to="/demo4">动态组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import List from './List'

export default {
  name: 'Home',
  components: {
    List
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
