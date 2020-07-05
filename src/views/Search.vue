<template>
    <div class="container">
        <search-form :items="searchForm" @search="handleSearch" v-model="searchParams">
            <el-button @click="showModal()" slot="right-content" type="primary">新增</el-button>
        </search-form>
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'

export default {
    name: 'Tpl',
    components: {
        SearchForm
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
            }
        }
    },
    created () {

    },
    methods: {
        handleSearch (val) {
            console.log(val)
        }
    }
}
</script>

<style scoped lang="scss">

</style>
