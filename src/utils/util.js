
let index = 0
const now = Date.now()
/**
 *生成uuid
 * @param {*String} prefix
 */
export function getUuid (prefix = 'vue') {
    const id = index
    index += 1
    return `${prefix}-${now}-${id}`
}

/**
 * 生成笛卡尔积
 * @returns {Array}
 */
export function descartes (array) {
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

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr (arr) {
    return Array.from(new Set(arr))
}
