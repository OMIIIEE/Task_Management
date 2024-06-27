import React, { useState } from 'react';
import AddTask from '../components/task/AddTask';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList />
    </div>
  );
};

export default Home;
