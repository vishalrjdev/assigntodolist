import React, {useState} from 'react';

const TodoItem = ({task, onEditTask, onDeleteTask})=>{
const [isEditing, setEditing] = useState(false);
const [text, setText]= useState(task.text);

const handleEdit=() =>{
    if(isEditing && text.trim()){
        onEditTask(task.id, {...task, text})
    }
    setEditing(!isEditing)
}

const toggleCompleted=()=>{
    onEditTask(task.id, {...task,complted: !task.completed})
}
return(
    <li> {isEditing ? (
        <input type="text" value={text} onChange ={(e)=>setText(e.target.value)}/> 
    ) :(
        <span style={{
            textDecoration: task.completed ? "line-through"  : "none",
        }}>
            {task.text} </span>
    )}

    <button onClick={toggleCompleted}>{task.cpmpleted ? "Undo" :"complete"}</button>
    <button onClick={handleEdit}>{isEditing ? "save" : "Edit"}</button>
    <button onClick={()=> onDeleteTask(task.id)}>Delte</button>
    </li>
)
}

export default TodoItem;
