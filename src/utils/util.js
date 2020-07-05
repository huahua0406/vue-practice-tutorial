
let index = 0
const now = Date.now()

export function getUuid (prefix = 'vue') {
    const id = index
    index += 1
    return `${prefix}-${now}-${id}`
}
