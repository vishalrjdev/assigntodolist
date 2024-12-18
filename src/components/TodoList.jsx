import react from "react";
import TodoItem from "../TodoItem";
const TodoList = ({ task, onEditTask, onDeleteTask }) => {
  return (
    <ul>
      {task.map((task) => {
        <TodoItem
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />;
      })}
    </ul>
  );
};
export default TodoList;
