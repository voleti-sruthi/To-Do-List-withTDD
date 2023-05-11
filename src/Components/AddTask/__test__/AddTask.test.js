import { fireEvent,render, screen } from '@testing-library/react';
import AddTask from '../AddTask';

const mockSetToDo = jest.fn();
describe("about the input field",()=>{
    it("Should have an input field",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const inputField = screen.getByPlaceholderText("Add New Task");
        expect(inputField).toBeVisible();
    })
    it("Should reflect the changes in input field on keyChange",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const inputField = screen.getByPlaceholderText("Add New Task");
        fireEvent.click(inputField);
        fireEvent.change(inputField,{target:{value:"Task 1"}});
        expect(inputField.value).toBe("Task 1");
    })
})

describe("about the AddTask button",()=>{
    it("should have a button to addTask",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const addTaskButton = screen.getByRole("button",{name:"ADD"});
        expect(addTaskButton).toBeVisible();
    })

    
    it("Should disable the button if input field is empty",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const inputField = screen.getByPlaceholderText("Add New Task");
        const addTaskButton = screen.getByRole("button",{name:"ADD"});
        fireEvent.click(inputField);
        expect(addTaskButton).toBeDisabled();
    })

    it("should enable the add Task button on adding text in InputField",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const inputField = screen.getByPlaceholderText("Add New Task");
        const addTaskButton = screen.getByRole("button",{name:"ADD"});
        fireEvent.click(inputField);
        fireEvent.change(inputField,{target:{value:"Task 1"}});
        expect(addTaskButton).toBeEnabled();
    })

    it("should Add task to task list onClick of Add button and clear the inputField",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const inputField = screen.getByPlaceholderText("Add New Task");
        const addTaskButton = screen.getByRole("button",{name:"ADD"});
        fireEvent.click(inputField);
        fireEvent.change(inputField,{target:{value:"Task 1"}});
        fireEvent.click(addTaskButton);
        expect(mockSetToDo).toBeCalled();
    })
    it("should Add task to task list onClick of Add button and clear the inputField",()=>{
        render(<AddTask toDos={[]} setToDos={mockSetToDo}/>);
        const inputField = screen.getByPlaceholderText("Add New Task");
        const addTaskButton = screen.getByRole("button",{name:"ADD"});
        fireEvent.click(inputField);
        fireEvent.change(inputField,{target:{value:"Task 1"}});
        // expect(addTaskButton).toBeEnabled();
        fireEvent.click(addTaskButton);
        // expect(inputField.value).toBe("");
        expect(addTaskButton).toBeDisabled();
    })
})