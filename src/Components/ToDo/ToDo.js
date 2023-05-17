import React, { useState } from 'react'
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import { Link } from 'react-router-dom';

function ToDo() {
    const [toDo,setToDo] = useState([]);
  return (
    <div>
        <AddTask toDos={toDo} setToDos={setToDo}/>
        <TaskList toDos={toDo}/>
        <Link to="/users">User Page</Link>
    </div>
  )
}

export default ToDo