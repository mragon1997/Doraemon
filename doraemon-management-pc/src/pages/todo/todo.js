import React, { Component } from 'react'
import './todo.css'

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
      <div>
        <h1>this is todo</h1>
        <ul>
          {this.state.todoList.map(todo => {
            return <li key={todo.id}>{todo.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Todo
