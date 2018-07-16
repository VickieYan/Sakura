const stringifyQuery = function(obj) {
    if (JSON.stringify(obj) === '{}') {
        return '' // 如果为空,返回空字符串
    }
    const res = obj ? Object.keys(obj).map(key => {
        const val = obj[key]
        if (Array.isArray(val)) {
            const result = []
            val.forEach(val2 => {
                result.push(`${key}=${val2}`)
            })
            return result.join('&')
        }

        return `${key}=${val}`
    }).join('&') : null
    return res ? `?${res}` : '' 
}

export default stringifyQuery