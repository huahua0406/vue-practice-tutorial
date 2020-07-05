<template>
    <div>
        <h2>List</h2>
        <Child @hook:mounted="listMounted" />
    </div>
</template>

<script>
export default {
    naem: 'List',
    methods: {
        listMounted () {
            console.log('child ====> childMounted')
        }
    },
    beforeCreate () {
        console.log('parent beforeCreate')
    },
    created () {
        console.log('parent created')
    },
    beforeMount () {
        console.log('parent beforeMount')
    },
    mounted () {
        console.log('parent ====> mounted')
    },
    beforeDestroy () {
        console.log('parent beforeDestroy')
    },
    destroyed () {
        console.log('parent destroyed')
    }
}
</script>
