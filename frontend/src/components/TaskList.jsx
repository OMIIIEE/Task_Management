import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import Pagination from './Pagination';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [tasksPerPage] = useState(6); //State for Tasks per page

  const [priorities, setPriorities] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      const tasksData = response.data;
      const uniquePriorities = ['All', ...new Set(tasksData.map(task => task.priority))];
      setTasks(tasksData);
      setPriorities(uniquePriorities);
      setFilteredTasks(tasksData);
      setLoading(false); // Set loading to false after data fetch
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false); // Set loading to false on error
    }
  };

  const filterTasksByPriority = (priority) => {
    if (priority === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(task => task.priority === priority);
      setFilteredTasks(filtered);
    }
    setCurrentPage(1); // Reset to first page on category change
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      fetchTasks(); // Refresh tasks after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (taskId, updatedTaskData) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, updatedTaskData);
      fetchTasks(); // Refresh tasks after update
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Get current tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredTasks.length / tasksPerPage)));

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex flex-row text-pink-600">Task List</h2>
      <div className="flex items-center justify-center my-4">
        <span className="font-bold mr-2">Filter by Priority:</span>
        <select onChange={(e) => filterTasksByPriority(e.target.value)}>
          {priorities.map((priority, index) => (
            <option key={index} value={priority}>{priority}</option>
          ))}
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
            {currentTasks.map((task) => (
              <TaskCard key={task._id} task={task} onDelete={deleteTask} onUpdate={updateTask} />
            ))}
          </div>
          <Pagination
            totalPages={Math.ceil(filteredTasks.length / tasksPerPage)}
            currentPage={currentPage}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </>
      )}
    </div>
  );
};

export default TaskList;
