import React, { useState } from "react";

 
function TodoList({ taskList, onDelete, onEdit, onToggle }) {
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  return (
    <ul className="list-group">
      {taskList.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center" style={{ gap: "10px", flex: 1 }}>
          
            <input
              type="checkbox"
              className="form-check-input"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
 
            {editId === task.id ? (
              <input
                type="text"
                className="form-control"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                style={{ maxWidth: "60%" }}
              />
            ) : (
              <span
                onDoubleClick={() => onToggle(task.id)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "grey" : "black",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </span>
            )}
          </div>

          <div>
 
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={() => onToggle(task.id)}
            >
              {task.completed ? "Undo" : "Done"}
            </button>

        
            {editId === task.id ? (
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => {
                  if (newText.trim() !== "") {
                    onEdit(task.id, newText.trim());
                  }
                  setEditId(null);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="btn btn-sm btn-info me-2"
                onClick={() => {
                  setEditId(task.id);
                  setNewText(task.text);
                }}
              >
                Edit
              </button>
            )}

           
            <button
              className="btn btn-sm  text-light"
              onClick={() => onDelete(task.id)}
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
