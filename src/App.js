import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDoPage from './Components/Pages/ToDoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<ToDoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
