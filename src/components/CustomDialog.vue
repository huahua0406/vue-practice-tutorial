<template>
    <!---组件主要用到了$attrs和$listeners来达到透传的效果-->
    <el-dialog :visible.sync="dialogVisible" v-bind="$attrs" v-on="$listeners">
        <!--内容区域的默认插槽-->
        <slot></slot>
        <!--使用弹框的footer插槽添加按钮-->
        <template #footer>
            <!--对外继续暴露footer插槽，有个别弹框按钮需要自定义-->
            <slot name="footer">
                <!--将取消与确定按钮集成到内部-->
                <span>
                    <el-button @click="_handleCancel">取 消</el-button>
                    <el-button type="primary" @click="_handleOk">
                        确 定
                    </el-button>
                </span>
            </slot>
        </template>
    </el-dialog>
</template>
<script>

export default {
    name: 'CustomDialog',
    // 默认情况下vue会把父作用域的不被认作 props 的特性绑定 且作为普通的 HTML 特性应用在子组件的根元素上
    // 通过设置 inheritAttrs 到 false，这些默认行为将会被去掉
    inheritAttrs: false,
    props: {
        // 对外暴露visible属性，用于显示隐藏弹框
        visible: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        // 通过计算属性，对.sync进行转换，外部也可以直接使用visible.sync
        dialogVisible: {
            get () {
                return this.visible
            },
            set (val) {
                this.$emit('update:visible', val)
            }
        }
    },
    created () {
        // console.log(this.$attrs, this.$listeners)
    },
    methods: {
        // 对外抛出cancel事件
        _handleCancel () {
            this.$emit('update:visible', false)
            this.$emit('cancel')
        },
        // 对外抛出ok事件
        _handleOk () {
            this.$emit('ok')
        }
    }
}
</script>
