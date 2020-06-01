<template>
  <div class="demo">
    <div class="block">
      <h2>debounce使用</h2>
      <el-input v-model="value" @input="handleSearch" style="width:500px;"></el-input>
      <h2>路由props传参: https://router.vuejs.org/zh/guide/essentials/passing-props.html</h2>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'Demo',
  props: {
    msg: String
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleSearch () {
      this.getRemote(this.value)
    },
    // 注意，这里debounce中的第一个参数，不能写成箭头函数，否则，取不到this
    getRemote: debounce(function (query) {
      // to do ...
      // this 的指向没有问题
      console.log('此处向后台发起请求:' + query)
    }, 500)
  }
}
</script>

<style scoped lang="scss">

</style>
