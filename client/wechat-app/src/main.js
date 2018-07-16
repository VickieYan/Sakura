import Vue from 'vue'
import App from './App'
import plugin from './plugin'
import Loader from './loader'

const { RouterParser } = plugin

Vue.config.productionTip = false
Vue.use(RouterParser)
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

const loader = new Loader(Vue)
loader.init()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
