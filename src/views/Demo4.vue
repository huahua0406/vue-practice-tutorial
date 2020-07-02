<template>
    <div class="tpl">
        <el-card>
            <div slot="header">规格设置：</div>
            <el-form label-width="80px" ref="form">
                <div :key="index" v-for="(item, index) in form">
                    <el-form-item label="规格名">
                        <el-input style="width:300px" v-model="item.specName"></el-input>
                    </el-form-item>
                    <el-form-item label="规格值">
                        <el-tag
                            :disable-transitions="false"
                            :key="`${tag}__${idx}`"
                            @close="handleClose(tag, index)"
                            closable
                            v-for="(tag, idx) in item.specVals"
                        >{{tag}}</el-tag>
                        <el-input
                            @blur="handleInputConfirm(index)"
                            @keyup.enter.native="handleInputConfirm(index)"
                            class="input-new-tag"
                            ref="saveTagInput"
                            size="small"
                            style="width:300px"
                            v-model="item.inputValue"
                        >
                            <el-button size="small" slot="append">+ 新增</el-button>
                        </el-input>
                    </el-form-item>
                </div>
            </el-form>
            <!-- 新增 -->
            <div>
                <el-input @keyup.enter.native="handleInput" placeholder="多个规格名以空格分割" style="width:300px" v-model="inputValue">
                    <el-button @click="handleInput" slot="append" type="primary">+ 新增</el-button>
                </el-input>
            </div>
        </el-card>
        <el-card>
            <div slot="header">规格信息</div>
            <div>
                <span>批量设置：</span>
                <el-table :data="tableData" :span-method="spanMethod" border style="width: 100%; margin-top: 20px">
                    <!-- 自定义部分 -->
                    <el-table-column :key="i" :label="col.label" :prop="col.prop" v-for="(col, i) in specNames"></el-table-column>

                    <!-- 固定写死的部分 -->
                    <el-table-column label="SKU编码" prop="sku_sn">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row['sku_sn']"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="数值 1（元）" prop="guide_price">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row['guide_price']"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="数值 2（元）" prop="purchase_price">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row['purchase_price']"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="数值 3（元）" prop="sell_price">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row['sell_price']"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
// https://github.com/zaxlct/vue-sku/blob/master/src/App.vue
/**
 * 生成笛卡尔积
 * @returns {*}
 */
function descartes (array) {
    if (array.length < 2) return array[0] || []

    return [].reduce.call(array, function (col, set) {
        var res = []
        col.forEach(function (c) {
            set.forEach(function (s) {
                var t = [].concat(Array.isArray(c) ? c : [c])
                t.push(s)
                res.push(t)
            })
        })
        return res
    })
}

export default {
    name: 'Sku',
    props: {},
    data () {
        return {
            form: [],
            inputValue: '',
            skuList: [],
            tableData: [],
            specList: [
                { name: '颜色', children: ['黄色', '绿色'] },
                { name: '尺寸', children: ['S', 'M', 'L'] },
                { name: '大小', children: ['小', '中', '大'] }
            ],
            specNames: [
                { label: '颜色', prop: 'attr_0' },
                { label: '尺寸', prop: 'attr_1' },
                { label: '大小', prop: 'attr_1' }
            ],
            columns: [
                { label: 'SKU货号', prop: 'sku_sn' },
                { label: '指导价', prop: 'guide_price' },
                { label: '售价1', prop: 'purchase_price' },
                { label: '售价', prop: 'sell_price' }
            ]
        }
    },
    created () {
        // 对数据进行过滤，规格名称不为空，且规格值列表大于0
        const arr = this.specList
            .filter(v => {
                return v.name && v.children.length > 0
            })
            .map(item => {
                return item.children
            })
        if (arr.length <= 0) {
            return
        }

        const specNames = this.specList.map((item, index) => {
            return {
                label: item.name,
                prop: `attr_${index}`,
                children: item.children
            }
        })
        this.specNames = specNames
        this.skuList = descartes(arr)
        // console.log(this.skuList)
        for (let index = 0; index < this.skuList.length; index++) {
            const item = this.skuList[index]
            // console.log(Object.values(item))
            const temp = {}
            Object.values(item).forEach(val => {
                this.specNames.forEach(it => {
                    if (it.children.includes(val)) {
                        temp[it.prop] = val
                    }
                })
            })
            this.tableData.push({
                ...temp,
                sku_sn: undefined,
                guide_price: 100,
                purchase_price: 1,
                sell_price: undefined
            })
            // console.log(this.tableData)
        }
    },
    methods: {
        handleInput () {
            const inputValue = this.inputValue
            if (inputValue) {
                this.form.push({
                    specName: inputValue,
                    specVals: [],
                    inputValue: ''
                })
            }
            this.inputValue = ''
        },
        handleClose (tag, index) {
            this.form[index].specVals.splice(this.form[index].specVals.indexOf(tag), 1)
        },
        handleInputConfirm (index) {
            const inputValue = this.form[index].inputValue
            if (inputValue) {
                this.form[index].specVals.push(inputValue)
            }
            this.form[index].inputValue = ''
        },
        spanMethod ({ row, column, rowIndex, columnIndex }) {
            // columnIndex <= 2 改成自己需要处理的列序号(第一列是0)
            if (columnIndex <= 2) {
                if (row[column.property] === '') {
                    return [1, 1]
                }
                console.log(this)
                console.log(this[column.property])
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
.el-tag + .el-tag {
    margin-left: 10px;
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
