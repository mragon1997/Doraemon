const Service = require('egg').Service
const uuid = require('uuid/v4')

class TodoService extends Service {
  // 新增一条todo
  async create({ title, type }) {
    let todo = {
      id: uuid(),
      title,
      type,
      time: this.app.mysql.literals.now
    }
    const result = await this.app.mysql.insert('todolist', todo)

    return result.affectedRows === 1
  }

  // 查询单条todo
  async show({ id }) {
    const todo = await this.app.mysql.get('todolist', { id })

    return todo
  }

  // 查询全部todo
  async index() {
    const todolist = await this.app.mysql.select('todolist')

    return todolist
  }

  // 更新一条todo
  async update({ id, title, state, type }) {
    let todo = {
      id
    }

    if (title) todo.title = title
    if (state) todo.state = state
    if (type) todo.type = type
    const result = await this.app.mysql.update('todolist', todo)

    return result.affectedRows === 1
  }

  // 删除一条todo
  async destroy({ id }) {
    const result = await this.app.mysql.delete('todolist', { id })

    return result.affectedRows === 1
  }
}

module.exports = TodoService
