const Controller = require('egg').Controller

const so = {
  code: 0,
  message: 'success'
}

const fo = {
  code: 1,
  message: 'error'
}
class TodoController extends Controller {
  // 新增一条todo
  async create() {
    const ctx = this.ctx

    const result = await ctx.service.todo.create(ctx.request.body)

    ctx.body = result ? so : fo
    ctx.status = 201
  }

  // 查询所有todo
  async index() {
    const ctx = this.ctx

    // 获取todolist
    const todolist = await ctx.service.todo.index()

    // 设置响应体
    ctx.body = {
      ...so,
      data: todolist
    }

    // 设置状态码
    ctx.status = 200
  }

  // 查询单条todo
  async show() {
    const ctx = this.ctx

    const todo = await ctx.service.todo.show(ctx.params)

    ctx.body = todo ? { ...so, data: todo } : fo
    ctx.status = 201
  }

  // 修改单条todo
  async update() {
    const ctx = this.ctx

    const result = await ctx.service.todo.update({
      ...ctx.params,
      ...ctx.request.body
    })

    ctx.body = result ? so : fo
    ctx.status = 201
  }

  // 删除单条todo
  async destroy() {
    const ctx = this.ctx

    const result = await ctx.service.todo.destroy(ctx.params)

    ctx.body = result ? so : fo
    ctx.status = 201
  }
}

module.exports = TodoController
