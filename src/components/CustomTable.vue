<template>
    <el-table :data="list" v-bind="$attrs" v-on="$listeners">
        <!-- table   -->
        <template v-for="(column, index) in columns">
            <!-- 额外的插槽 -->
            <slot name="extra"></slot>
            <!-- 复选框 -->
            <el-table-column :key="index" type="selection" v-if="column.type === 'selection'" width="55"></el-table-column>
            <!-- 序号 -->
            <el-table-column :key="index" label="序号" type="index" v-else-if="column.type === 'index'" width="50"></el-table-column>
            <!-- 具体内容 -->
            <!-- prop -->
            <el-table-column :key="index" :label="column.label" :prop="column.prop" v-else-if="column.type === 'prop'"
                :align="column.align" :width="column.width"></el-table-column>
            <!-- slot -->
            <el-table-column :key="index" :label="column.label" :width="column.width" :align="column.align" v-else>
                <template slot-scope="scope">
                     <!-- 操作按钮 -->
                    <div v-if="column.type === 'actions'">
                        <a
                            v-for="(item, index) in column.actions"
                            :key="index"
                            @click="handleClick(item, scope.$index, scope.row)"
                            class="operate-button"
                            href="javascript:void(0)"
                        >
                            {{item.name}}
                        </a>
                    </div>
                </template>
            </el-table-column>
        </template>
        <!--默认的slot -->
        <slot />
    </el-table>
</template>

<script>
export default {
    name: 'CustomTable',
    props: {
        list: {
            type: Array,
            required: true,
            default: () => []
        },
        columns: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data () {
        return {}
    },
    methods: {
        // 处理点击事件
        handleClick (action, index, row) {
            // emit事件
            this.$emit(`${action.emitKey}`, index, row)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
