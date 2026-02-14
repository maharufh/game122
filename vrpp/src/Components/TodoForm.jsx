import React, { useState } from "react";

function TodoForm({ onAdd }) {
  let [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  }

  return (
    <form className="input-group mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-success">Add</button>
    </form>
  );
}

export default TodoForm;
