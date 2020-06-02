<template>
    <el-row :gutter="20">
        <el-col :span="20">
            <el-form :inline="true" :model="innerSearchParams" class="search-form" ref="searchForm">
                <el-form-item :key="index" :label="item.name" v-for="(item, index) of items">
                    <el-input :placeholder="item.placeholder || '请输入'" v-if="!item.type || item.type === 'input'" v-model="innerSearchParams[item.key]" />
                    <el-select :placeholder="item.placeholder || '请选择'" v-else-if="item.type === 'select'" v-model="innerSearchParams[item.key]">
                        <el-option :key="item.value" :label="item.label" :value="item.value" v-for="item in item.options"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submitForm" type="primary">查询</el-button>
                    <el-button @click="resetForm('searchForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="4" class="text-right">
            <slot name="right-content"></slot>
        </el-col>
    </el-row>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
    name: 'Tpl',
    model: {
        prop: 'searchParams',
        event: 'change'
    },
    props: {
        searchParams: {
            type: Object,
            default: () => {
                return {}
            }
        },
        items: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            // 保存初始化时的项
            initSearchParams: {},
            innerSearchParams: {}
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            // 保存初始值的
            this.initSearchParams = cloneDeep(this.searchParams)
            this.innerSearchParams = cloneDeep(this.searchParams)
        },
        submitForm () {
            const cpValue = cloneDeep(this.innerSearchParams)
            this.$emit('change', cpValue)
            this.$emit('search', cpValue)
        },
        resetForm () {
            const cpValue = cloneDeep(this.initSearchParams)
            this.innerSearchParams = cloneDeep(this.initSearchParams)
            this.$emit('change', cpValue)
            this.$emit('reset', cpValue)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
