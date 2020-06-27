<template>
    <div class="container">
        <el-button @click="showModal">打开弹窗</el-button>

        <search-form :items="searchForm" @search="handleSearch" v-model="searchParams">
            <el-button @click="showModal()" slot="right-content" type="primary">新增</el-button>
        </search-form>

        <!--外部使用方式 confirm cancel 是自定义的事件 opened是包装el-dialog的事件，通过$listeners传入到el-dialog里面-->
        <custom-dialog :visible.sync="visible" @cancel="handleCancel" @ok="handleOk" title="测试弹框" width="400px">
            这是一段内容
            <el-input v-model="value"></el-input>
        </custom-dialog>

        <custom-table v-loading="loading" :columns="columns" :list="list" :max-height="500" @selection-change="handleSelectionChange" border size="mini" @view="handleView">
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
import SearchForm from '@/components/SearchForm'
import CustomDialog from '@/components/CustomDialog'
import CustomTable from '@/components/CustomTable'
export default {
    name: 'Tpl',
    components: {
        SearchForm,
        CustomTable,
        CustomDialog
    },

    data () {
        return {
            searchForm: [
                { name: '发起人', key: 'name' },
                { name: '维修师傅', key: 'repairerId', type: 'select', options: [] },
                { name: '楼号', key: 'floorId', type: 'select', options: [] },
                {
                    name: '宿舍',
                    key: 'roomId',
                    type: 'select',
                    options: [
                        {
                            label: '区域一',
                            value: 'shanghai'
                        },
                        {
                            label: '区域二',
                            value: 'beijing'
                        }
                    ]
                }
            ],
            searchParams: {
                pageNo: 1,
                pageSize: 15,
                name: '',
                repairerId: undefined,
                floorId: undefined,
                roomId: undefined
            },
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
            ],
            visible: false,
            value: ''
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
        showModal () {
            this.visible = true
        },
        handleOk () {
            console.log('ok')
            this.visible = false
        },
        handleCancel () {
            this.$message({ type: 'success', message: '关闭' })
        },
        handleSearch (val) {
            console.log(val)
        },
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
