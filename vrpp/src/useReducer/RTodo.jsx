import React, { useReducer, useState, useEffect } from "react";
import todoReducer from "./TodoReducer";

function RTodo() {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch({ type: "SET_TODOS", payload: storedTodos });
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  function handleAddOrEdit() {
    if (task.trim() === "") return;

    if (editId) {
      dispatch({
        type: "EDIT_TODO",
        payload: { id: editId, text: task }
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(),
          text: task,
          completed: false
        }
      });
    }

    setTask("");
  }

  function handleEdit(todo) {
    setTask(todo.text);
    setEditId(todo.id);
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-header text-center">
            <h3>Todo App (useReducer)</h3>
          </div>

          <div className="card-body">
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control me-2"
                value={task}
                placeholder="Enter task"
                onChange={(e) => setTask(e.target.value)}
              />
              <button className="btn btn-dark" onClick={handleAddOrEdit}>
                {editId ? "Update" : "Add"}
              </button>
            </div>

            <ul className="list-group">
              {state.todos.map(todo => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={todo.completed}
                      onChange={() =>
                        dispatch({
                          type: "TOGGLE_TODO",
                          payload: todo.id
                        })
                      }
                    />

                    <span
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none"
                      }}
                    >
                      {todo.text}
                    </span>
                  </div>

                  <div>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(todo)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        dispatch({
                          type: "DELETE_TODO",
                          payload: todo.id
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RTodo;
