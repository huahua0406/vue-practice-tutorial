<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" prop="date" width="180"></el-table-column>
        <el-table-column label="姓名" prop="name" width="180"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" size="small" type="text">查看</el-button>
                <el-button size="small" type="text">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'Tpl',
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
        cols: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {

        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
</style>
