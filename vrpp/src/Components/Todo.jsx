import React, { useState } from "react";
import TodoNav from "./TodoNav";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  //  Default tasks
  const [taskList, setTaskList] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: true },
    { id: 3, text: "Build a Todo App", completed: false },
  ]);

 
  function handleAddTask(task) {
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
  }

 
  function handleDelete(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

 
  function handleEdit(id, newText) {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  
  function handleToggle(id) {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="container mt-5">
      <TodoNav />
      <TodoForm onAdd={handleAddTask} />
      <TodoList
        taskList={taskList}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default Todo;
