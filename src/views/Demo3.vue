<template>
    <div class="container">
        <search-form :items="searchForm" @search="handleSearch" v-model="searchParams">
            <el-button @click="showModal()" slot="right-content" type="primary">新增</el-button>
        </search-form>

        <!--外部使用方式 confirm cancel 是自定义的事件 opened是包装el-dialog的事件，通过$listeners传入到el-dialog里面-->
        <custom-dialog
            :visible.sync="visible"
            title="测试弹框"
            width="400px"
            @ok="handleOk"
            @cancel="handleCancel"
        >
            这是一段内容
        </custom-dialog>
        <el-button @click="handleClick">show dialog</el-button>
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import CustomDialog from '@/components/CustomDialog'
export default {
    name: 'Tpl',
    components: {
        SearchForm,
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
            columns: [],
            visible: false
        }
    },
    methods: {
        showModal () {},
        handleClick () {
            this.visible = true
        },
        handleOk () {
            console.log('ok')
        },
        handleCancel () {
            console.log('cancel')
        },
        handleSearch (val) {
            console.log(val)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
