import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { Loader } from './loader'
import config from './config/config.default'
import { crossOrigin } from './utils'


const app = new Koa()
const loader = new Loader(app)

app.use(bodyParser())
app.use(crossOrigin({ origin: config.trustOrigin }))
app.use(loader.loaderRouter())
console.log(app.config.trustOrigin)

app.listen(app.config.port, '127.0.0.1', () => {
    console.log(`server listening on port ${app.config.port}`)
})