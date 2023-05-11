import React from 'react'

function TaskList({toDos}) {
  return (
    <div>
        {toDos.map((item,index)=>{
            return(
                <div data-testid="ToDoTask" key={index}>{item}</div>
            )
        })}
    </div>
  )
}

export default TaskList