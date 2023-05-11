import React, { useState } from 'react'
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';

function ToDo() {
    const [toDo,setToDo] = useState([]);
  return (
    <div>
        <AddTask toDos={toDo} setToDos={setToDo}/>
        <TaskList toDos={toDo}/>
    </div>
  )
}

export default ToDo