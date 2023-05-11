import { fireEvent, render, screen } from '@testing-library/react';
import ToDo from '../ToDo';
import AddTask from '../../AddTask/AddTask';
const toAddTask= (task)=>{
    const inputField = screen.getByPlaceholderText("Add New Task");
    const buttonElement = screen.getByRole("button",{name:"ADD"});
    task.forEach(item =>{
        fireEvent.click(inputField);
        fireEvent.change(inputField,{target:{value:item}});
        fireEvent.click(buttonElement);
    })
}

describe("To check the functionality of the taskList",()=>{
    it("to display the task on adding to task list",()=>{
        render(<ToDo/>)
        toAddTask(["Task 1"])
        const taskData = screen.getAllByTestId("ToDoTask");
        taskData.forEach((item)=>{
            expect(item).toBeVisible();
        })
    })
    
    it("to display the task on adding to task list",()=>{
        render(<ToDo/>)
        toAddTask(["Task 1","Task 2"])
        const taskData = screen.getAllByTestId("ToDoTask");
        taskData.forEach((item)=>{
            expect(item).toBeVisible();
        })
    })
})
