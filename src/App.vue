<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/detail/1">Detail</router-link>|
            <router-link to="/login">Login</router-link>
        </div> -->
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {}
    },
    created () {}
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: $color;
        }
    }
}

.text-right {
    text-align: right;
}

.container{
    padding: 25px;
}
.mb10{
    margin-bottom: 10px;
}
.mb20{
    margin-bottom: 10px;
}
</style>
