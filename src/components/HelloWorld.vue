<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test">
      test
    </div>
    <div class="box2">
      ssss
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.test{
    //访问公共的scss变量
    font-size:$tsize;
    background: $bg;
}
.box2{
    //访问公共的scss混入
    @include wh($w2,$h2)
}
</style>
