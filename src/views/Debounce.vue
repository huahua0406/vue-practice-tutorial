<template>
  <div class="container">
    <div class="block">
      <h2>debounce使用</h2>
      <el-input v-model="value" @input="handleSearch" placeholder="500ms请求" style="width:500px;"></el-input>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'Debounce',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleSearch () {
      this.remoteMethod(this.value)
    },
    // 注意，这里debounce中的第一个参数，不能写成箭头函数，否则，取不到this
    remoteMethod: debounce(function (query) {
      // todo ...
      // this 的指向没有问题
      console.log('此处向后台发起请求:' + query)
      //
      // https://juejin.im/post/5e96e70c6fb9a03c5b2fcf51
      // https://juejin.im/post/5ece4f196fb9a048017052b8
    }, 500)
  }
}
</script>

<style scoped lang="scss">

</style>
