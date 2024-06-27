import React, { useState } from 'react';
import AddTask from '../components/task/AddTask';
import TaskList from '../components/TaskList';
import Header from '../components/Header';
import backgroundImage from '../assets/bg.png'

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsModalOpen(false); // Close the modal after adding a task
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* <Header /> */}
      <div className="container mx-auto py-10 px-4 my-16" >
        <h1 className="text-5xl text-center mb-8 font-abril text-pink-600">Welcome to Task Master</h1>
        <div className="flex justify-center mb-4">
          <button onClick={openModal} className=" bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500">
            Add Task
          </button>
        </div>
        {isModalOpen && <AddTask onAdd={handleAddTask} closeModal={closeModal} />}
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
