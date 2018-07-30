import Controller from './base'
import { bp } from '../blueprint'

const AV = require('leanengine');



export default class User extends Controller {
    @bp.get('/user')
    async user() {
        this.ctx.body = await this.ctx.service.user.findAll()
    }
    @bp.get('/users')
    async users() {
        this.ctx.body = 'test'
    } 
}