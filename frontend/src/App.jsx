import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TaskList from './components/TaskList';
import AddTask from './components/task/AddTask';
// import homepage from './pages/homepage';

function App() {
 

  return (
    <>
     <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path="/tasks" element={<TaskList/>} />
        <Route path="/add-task" element={<AddTask/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
