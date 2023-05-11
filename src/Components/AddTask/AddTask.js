import React, {useState } from 'react'

function AddTask({toDos,setToDos}) {
  const [inputTask,setInput] = useState("");
  const [buttonState,setButtonState] = useState(true);
  const handle = ()=> {
    [...toDos].includes(inputTask)?setToDos([...toDos]):setToDos([...toDos,inputTask]);
    setInput("");
    setButtonState(true);
  }
  return (
    <div>
        <input value={inputTask} placeholder='Add New Task' onChange={(e)=>{
          setInput(e.target.value)
          if(e.target.value.length >= 1){
            setButtonState(false)
          }
          else{ 
            setButtonState(true)
          }
        }
        }/>
        <button disabled={buttonState} id="ADD" onClick={handle}>ADD</button>
    </div>

  )
}

export default AddTask