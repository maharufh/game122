import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter
} from "../features/todo/todoSlice";

function TodoApp() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { todos, filter } = useSelector((state) => state.todo);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="text-center mt-5">
      <h2>Todo App (Redux Toolkit)</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter task"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="btn btn-dark ms-2"
        onClick={() => {
          if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Add
      </button>

      <div className="mt-3">
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Completed
        </button>
        <button onClick={() => dispatch(setFilter("pending"))}>
          Pending
        </button>
      </div>

      <ul className="list-unstyled mt-4">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "10px"
              }}
            >
              {todo.text}
            </span>

            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
