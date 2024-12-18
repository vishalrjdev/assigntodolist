import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });
  return (
    <div>
      <h1>ToDo Application</h1>
      <TaskForm onAddTask={addTask} />
      <FilterButtons setFilter={setFilter} />
      <TodoList
        task={filteredTasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};
export default App;
