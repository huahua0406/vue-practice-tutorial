<template>
    <div class="container">
        <custom-table
            :columns="columns"
            :list="list"
            :max-height="500"
            @selection-change="handleSelectionChange"
            @view="handleView"
            border
            size="mini"
            v-loading="loading"
        >
            <!-- 默认的slot  如果交互很复杂 我们还可以直接使用表格内部的组件 -->
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)" size="mini">编辑</el-button>
                    <el-button @click="handleDelete(scope.$index, scope.row)" size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </custom-table>
    </div>
</template>

<script>
import CustomTable from '@/components/CustomTable'

export default {
    name: 'Table',
    components: {
        CustomTable
    },
    data () {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            list: [],
            loading: false,
            columns: [
                { key: 'selection', type: 'selection' },
                { key: 'index', type: 'index' },
                { key: 'date', type: 'prop', prop: 'date', label: '地址', width: '100', align: 'center' },
                { key: 'name', type: 'prop', prop: 'name', label: '昵称', width: '200', align: 'center' },
                { key: 'address', type: 'prop', prop: 'address', label: '地址', width: '200', align: 'center' },
                {
                    key: 'actions',
                    label: '操作',
                    type: 'actions',
                    actions: [
                        { name: '详情', emitKey: 'view' },
                        { name: '编辑', emitKey: 'edit' },
                        { name: '删除', emitKey: 'delete' }
                    ]
                }
            ]
        }
    },
    created () {
        this.loading = true
        setTimeout(() => {
            this.list = this.tableData
            this.loading = false
        }, 2000)
    },
    methods: {
        handleSelectionChange () {
            console.log(arguments)
        },
        handleView (index, row) {
            console.log(index, row)
        },
        handleEdit (index, row) {
            console.log(index, row)
        },
        handleDelete (index, row) {
            console.log(index, row)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
