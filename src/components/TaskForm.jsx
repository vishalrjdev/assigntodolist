import React, { useState } from "react";

const TaskForm = ({onAddTask}) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()){
      alert("task can not be empty");
    } return;
    onAddTask({ id: Date.now(), text:text.trim(), completed: false });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
