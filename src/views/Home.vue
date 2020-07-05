<template>
  <div class="home">
    <ul id="example">
      <li>
        <router-link to="/lifecycle">父子组件生命周期加载顺序</router-link>
      </li>
      <li>
        <router-link to="/debounce">debounce使用</router-link>
      </li>
      <li>
        <router-link to="/search">表单搜索项组件</router-link>
      </li>
      <li>
        <router-link to="/table">table组件</router-link>
      </li>
      <li>
        <router-link to="/dialog">二次封装dialog组件</router-link>
      </li>
      <li>
        <router-link to="/comp">动态组件</router-link>
      </li>
      <li>
        <router-link to="/sku-table">sku table</router-link>
      </li>
      <li>
        <router-link to="/sku-select">sku select</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import List from '@/componets/List'

export default {
  name: 'Home',
  components: {
  },
  methods: {
  }
}
</script>
