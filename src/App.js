import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class App extends Component {
  id = 1;

  state = {
    input: "",
    date: "",
    todos: [{ id: 0, text: "리액트소개", date: "2020-08-14", checked: false }],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, date, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        date: date,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  onDateChange = (date) => {
    console.log(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
    this.setState({
      date:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleRemove,
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      onDateChange,
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            onDateChange={onDateChange}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
