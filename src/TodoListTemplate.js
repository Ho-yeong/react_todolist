import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-main">
      <div className="title">오늘할일</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
