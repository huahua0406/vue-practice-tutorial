<template>
    <div class="container">
        <search-form :items="searchForm" @search="handleSearch" v-model="searchParams">
            <el-button @click="showModal()" slot="right-content" type="primary">新增</el-button>
        </search-form>
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
        <EditDialog />
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import EditDialog from '@/components/EditDialog'
export default {
    name: 'Tpl',
    components: {
        'search-form': SearchForm,
        EditDialog
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
            columns: []
        }
    },
    methods: {
        showModal () {},
        handleClick () {},
        handleSearch (val) {
            console.log(val)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
