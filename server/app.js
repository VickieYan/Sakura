import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import AV from 'leanengine'
import { Loader } from './loader'
import config from './config/config.default'
import { crossOrigin } from './utils'

// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
require('./cloud/cloud');

const app = new Koa()
const loader = new Loader(app)

// 加载云引擎中间件
app.use(AV.koa());

app.use(bodyParser())
app.use(crossOrigin({ origin: config.trustOrigin }))
app.use(loader.loaderRouter())
console.log(app.config.trustOrigin)

module.exports = app
