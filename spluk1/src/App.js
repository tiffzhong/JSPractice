// import cx from "classnames";
import React from "react";
import { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [],
      newItem: ""
    };
  }

  addToList = item => {
    console.log(item.newItem);
    if (item.newItem !== "") {
      item = { id: Math.random(), item: item.newItem };
      let todos = [...this.state.todos, item];
      this.setState({
        todos
      });
    }
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  handleChange = event => {
    this.setState({
      newItem: event.target.value
    });
  };
  handleSumbit = e => {
    e.preventDefault();
    this.addToList(this.state);
    this.setState({
      newItem: ""
    });
  };

  render() {
    const todoList = this.state.todos.map(todoItem => {
      return (
        <div>
          <ul>
            <li key={todoItem.id} onClick={() => this.deleteTodo(todoItem.id)}>
              {todoItem.item}
            </li>
          </ul>
        </div>
      );
    });
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <form onSubmit={this.handleSumbit}>
            <input value={this.state.newItem} onChange={this.handleChange} />
            <button type="submit" onChange={this.handleSumbit}>
              Add
            </button>
          </form>
          <p>
            {this.state.todos.length} remaining out of {this.state.todos.length}
            tasks
          </p>
          {todoList}
        </div>

        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}
