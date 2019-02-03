import React, { Component } from 'react'
import './todo.sass'

import { Icon } from 'antd'

import { getTodo } from '../../api/todo.js'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  // 获取todolist
  getTodoList() {
    let me = this
    getTodo().then(res => {
      console.log('获取todo', res)
      this.setState({
        todoList: res.data
      })
    })
  }

  componentDidMount() {
    this.getTodoList()
  }
  render() {
    return (
      <div className="page-todo">
        <div className="todo-content">
          <h2>待办</h2>
          <ul className="todo-list">
            {this.state.todoList.map(todo => {
              return (
                <li className="todo-item" key={todo.id}>
                  <span>{todo.title}</span>
                  <span className="todo-icon">
                    <Icon className="todo-icon" type="check" />
                    <Icon className="todo-icon" type="stop" />
                  </span>
                </li>
              )
            })}
            <li className="todo-add">
              <Icon className="dora-icon" type="plus-circle" />
            </li>
          </ul>
          <h2>搁置</h2>
        </div>
      </div>
    )
  }
}

export default Todo
