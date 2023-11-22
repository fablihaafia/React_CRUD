import React, { useState } from "react";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [tasks, setTasks] = useState([]); // Renamed newTask to tasks

  console.log("newTodo", newTodo);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTasks([...tasks, newTodo]); // Use spread operator to update tasks
      setNewTodo(""); // Clear the input field after adding a task
    }
  };

  return (
    <div>
      <h6>TodoList</h6>

      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="ml" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
