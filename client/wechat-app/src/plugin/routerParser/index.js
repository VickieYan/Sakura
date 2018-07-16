import utils from '../../utils'


// 获取路由对象
function parseRoute($mp) {
    const _$mp = $mp || {}
    const path = _$mp.page && _$mp.page.route
    return {
        path: `/${path}`,
        params: {},
        query: _$mp.query,
        hash: '',
        fullPath: parseURL({
            path: `/${path}`,
            query: _$mp.query
        })
    }
}

// 解析全路径
function parseURL(...params) {
    const { path, query } = params[0]
    const queryStr = utils.stringifyQuery(query)
    return `${path}${queryStr}`
}

function push(location, ...params) {
    const url = parseURL(location)
    url && wx.navigateTo({ url, ...params })
}

function replace(location, ...params) {
    const url = parseURL(location)
    url && wx.redirectTo({ url, ...params })
}

function go(delta) {
    wx.navigateBack({ delta })
}

function back() {
    wx.navigateBack()
}

export default {
    install(Vue) {
        if(this.installed) return
        this.installed = true
        let _route = {}
        const _router = {
            currentRoute: _route,
            push,
            replace,
            go,
            back
        }
        Object.defineProperties(Vue.prototype, {
            $route: {
                get() { return _route }
            }, 
            $router: {
                get() { return _router }
            }
        })
        Vue.mixin({
            onShow() {
                if(this.$parent)  return // 如果存在父组件，则不解析其路由
                const { $mp } = this.$root
                console.log($mp)
                _route = parseRoute($mp)

            }
        })
    }
}