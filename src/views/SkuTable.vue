<template>
    <div class="container">
        <el-card class="mb20">
            <div slot="header">规格设置：</div>
            <el-form label-position="left" label-width="80px" ref="form">
                <div :key="index" v-for="(item, index) in specList">
                    <el-form-item label="规格名:">
                        <el-input style="width:300px" v-model="item.specName"></el-input>
                    </el-form-item>
                    <el-form-item label="规格值:">
                        <el-tag
                            :disable-transitions="false"
                            :key="`${tag}__${idx}`"
                            @close="handleClose(tag, index)"
                            closable
                            v-for="(tag, idx) in item.specVals"
                        >{{tag}}</el-tag>
                        <el-input
                            @blur="handleInputAdd(index)"
                            @keyup.enter.native="handleInputAdd(index)"
                            placeholder="多个规格值以空格隔开"
                            size="small"
                            style="width:300px"
                            v-model="addValues[index]"
                        >
                            <el-button size="small" slot="append">+ 新增</el-button>
                        </el-input>
                    </el-form-item>
                </div>
            </el-form>
            <!-- 新增 -->
            <div>
                <el-input
                    @blur="handleInputConfirm"
                    @keyup.enter.native="handleInputConfirm"
                    placeholder="多个规格名以空格隔开"
                    ref="addInput"
                    style="width:300px"
                    v-if="inputVisible"
                    v-model="inputValue"
                >
                    <el-button @click="handleInputConfirm" slot="append" type="primary">+ 添加</el-button>
                </el-input>
                <el-button type="primary" @click="showInput" class="button-new-tag" size="small" v-else>+ 添加规格名</el-button>
            </div>
        </el-card>

        <el-card class="mb20">
            <div slot="header">数据</div>
            <div>
                <vue-json-pretty
                    :path="'res'"
                    :data="specListFilter"
                >
                </vue-json-pretty>
            </div>
        </el-card>

        <el-card>
            <div slot="header">规格信息</div>
            <div>
                <el-form :inline="true" :model="formInline" class="form-inline">
                    <el-form-item label="指导价倍数">
                        <el-input-number :max="10" :min="1" :precision="2" label="label" v-model="formInline.guide_price_multiple"></el-input-number>
                        <el-button type="primary" @click="batchSetGuidePrice">批量设置指导价倍数</el-button>
                    </el-form-item>
                    <el-form-item label="售价倍数">
                        <el-input-number :max="10" :min="1" :precision="2" label="label" v-model="formInline.sell_price_multiple"></el-input-number>
                        <el-button type="primary" @click="batchSetSellPrice">批量设置售价</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="tableData" :span-method="spanMethod" border style="width: 100%; margin-top: 20px">
                    <!-- 自定义部分 -->
                    <el-table-column :key="idx" :label="col.label" :prop="col.prop" v-for="(col, idx) in columns"></el-table-column>
                    <!-- 固定写死的部分 -->
                    <el-table-column label="SKU编码" prop="sku_sn">
                        <template slot-scope="scope">
                            <el-input size="mini" placeholder="请输入" v-model="scope.row['sku_sn']"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="进货价（元）" prop="purchase_price">
                        <template slot-scope="scope">
                            <el-input size="mini" placeholder="请输入" v-model="scope.row['purchase_price']"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="指导价（元）" prop="guide_price">
                        <template slot-scope="scope">
                            <el-input size="mini" placeholder="请输入" v-model="scope.row['guide_price']"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="售价（元）" prop="sell_price">
                        <template slot-scope="scope">
                            <el-input size="mini" placeholder="请输入" v-model="scope.row['sell_price']"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import { descartes, getUuid } from '@/utils/util'

export default {
    name: 'SkuTable',
    props: {},
    components: {
        VueJsonPretty
    },
    data () {
        return {
            inputVisible: false,
            inputValue: '', // 新增
            skuList: [],
            tableData: [],
            specList: [
                { id: 1, specName: '颜色', specVals: ['黄色', '绿色'] },
                { id: 2, specName: '尺寸', specVals: ['S', 'M', 'L'] },
                { id: 3, specName: '大小', specVals: ['小', '中', '大'] }
            ],
            addValues: [],
            formInline: {
                guide_price_multiple: 1.2,
                sell_price_multiple: 1.5
            }
        }
    },
    computed: {
        specListFilter () {
            return this.specList.filter(item => item.specName && item.specVals.length)
        },
        columns () {
            const columns = this.specList.map((item, index) => {
                return {
                    label: item.specName,
                    prop: `attr_${item.id}`
                }
            })
            return columns
        }
    },
    created () {
        // 对数据进行过滤，规格名称不为空，且规格值列表大于0
        const arr = this.specList
            .filter(item => {
                return item.specName && item.specVals.length
            })
            .map(item => {
                return item.specVals
            })
        if (arr.length <= 0) {
            return
        }

        this.skuList = descartes(arr)

        for (let index = 0; index < this.skuList.length; index++) {
            const temp = {}
            const row = this.skuList[index]

            this.specList.forEach(item => {
                row.forEach(val => {
                    if (item.specVals.includes(val)) {
                        temp[`attr_${item.id}`] = val
                    }
                })
            })

            this.tableData.push({
                ...temp,
                sku_sn: undefined,
                purchase_price: 100,
                guide_price: undefined,
                sell_price: undefined
            })
        }
    },
    methods: {
        showInput () {
            this.inputVisible = true
            this.$nextTick(_ => {
                this.$refs.addInput.$refs.input.focus()
            })
        },
        handleInputConfirm () {
            const inputValue = this.inputValue
            if (inputValue) {
                this.specList.push({
                    id: getUuid(),
                    specName: inputValue,
                    specVals: []
                })
            }
            this.inputVisible = false
            this.inputValue = ''
        },
        handleClose (spec, index) {
            this.specList[index].specVals.splice(this.specList[index].specVals.indexOf(spec), 1)
        },
        handleInputAdd (index) {
            const addValue = this.addValues[index].trim() || ''
            const oldArr = this.specList[index].specVals
            // 去重规格名
            if (oldArr.includes(addValue)) {
                this.$message.error('规格名重复')
                return
            }
            if (addValue) {
                const newArr = addValue.split(/\s+/) // 使用空格分割成数组
                this.specList[index].specVals = [...oldArr, ...newArr]
            }
            this.$set(this.addValues, index, '')
        },
        batchSetGuidePrice () {
            const guidePriceMultiple = this.formInline.guide_price_multiple
            this.tableData = this.tableData.map(item => ({
                ...item,
                guide_price: (item.purchase_price || 0) * guidePriceMultiple
            }))
        },
        batchSetSellPrice () {
            const sellPriceMultiple = this.formInline.sell_price_multiple
            this.tableData = this.tableData.map(item => ({
                ...item,
                sell_price: (item.purchase_price || 0) * sellPriceMultiple
            }))
        },
        spanMethod ({ row, column, rowIndex, columnIndex }) {
            // columnIndex <= 2 改成自己需要处理的列序号(第一列是0)
            if (columnIndex <= 2) {
                if (row[column.property] === '') {
                    return [1, 1]
                }
                if (this[column.property] !== row[column.property]) {
                    this[column.property] = row[column.property]
                    let num = 0
                    for (let i = rowIndex; i < this.tableData.length; i++) {
                        if (this.tableData[i][column.property] === row[column.property]) {
                            num++
                            if (i === this.tableData.length - 1) {
                                return [num, 1]
                            }
                        } else {
                            return [num, 1]
                        }
                    }
                } else {
                    return [0, 0]
                }
            }
        }
    }
}
</script>

<style lang="scss">
.el-tag {
    margin-right: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>
