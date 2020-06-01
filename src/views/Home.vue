<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Demo1/>
    <div id="example">
      <li>
        <router-link to="/">Home</router-link> |
      </li>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Demo1 from '@/components/Demo1.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Demo1
  }
}
</script>
