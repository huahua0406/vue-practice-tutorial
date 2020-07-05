<template>
    <div class="container">
        <el-button @click="showModal">打开弹窗</el-button>

        <!--外部使用方式 confirm cancel 是自定义的事件 opened是包装el-dialog的事件，通过$listeners传入到el-dialog里面-->
        <custom-dialog :visible.sync="visible" @cancel="handleCancel" @ok="handleOk" title="测试弹框" width="400px">
            这是一段内容
            <el-input v-model="value"></el-input>
        </custom-dialog>

    </div>
</template>

<script>
import CustomDialog from '@/components/CustomDialog'
export default {
    name: 'Dialog',
    components: {
        CustomDialog
    },

    data () {
        return {
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
        }
    }
}
</script>

<style scoped lang="scss">
</style>
