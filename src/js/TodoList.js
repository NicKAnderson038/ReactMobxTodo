import React from "react"
import { observer } from "mobx-react"


@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      console.log('TEST')
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       <span>{todo.value}</span>
      </li>
    ))
    return <div className="main-body">
      <h1>todos</h1>
      <h6>Type in a 'Todo' then press 'ENTER'</h6>
      <input className="new" placeholder="Enter Todo" onKeyPress={this.createNew.bind(this)} />
      <input className="filter" placeholder="Todo Filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoLis}</ul>
      <a href="#" onClick={clearComplete}>Clear Checked Boxes</a>
    </div>
  }
}
