import React, { useState } from 'react';
import { MdAccessTime, MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import ViewTaskModal from './task/ViewTaskModal';

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setUpdatedTask({ ...task });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    onUpdate(task._id, updatedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task._id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" shadow-md rounded-lg mb-4 bg-white bg-opacity-30">
      <div className="p-4 ">
        {!isEditing ? (
          <>
            <div className="flex justify-between items-center"> 
              <h5 className="text-lg font-semibold mb-2 ">{task.title}</h5>
              <span className={`px-2 py-1 text-sm rounded ${task.priority === 'high' ? 'bg-red-500 text-white' :
                task.priority === 'medium' ? 'bg-yellow-500 text-gray-900' :
                  'bg-green-500 text-white'
              }`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span></div>

            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <MdAccessTime className="text-gray-500" />
                <small className="ml-1">Due Date: {new Date(task.dueDate).toLocaleDateString()}</small>
              </div>

              <span className={`px-2 py-1 text-sm rounded ${task.status === 'pending' ? 'bg-yellow-500 text-gray-900' :
                  task.status === 'completed' ? 'bg-green-500 text-white' :
                    'bg-blue-500 text-white'
                }`}>
                {task.status}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <button
                  className="hover:bg-blue-600 hover:text-white  px-3 py-1 rounded-sm ml-2 focus:outline-none text-purple-500 text-lg"
                  onClick={toggleEdit}
                  title="Edit Task"
                >
                  <MdEdit className="me-1" />
                </button>
                <button
                  className="hover:bg-red-600 hover:text-white  px-3 py-1 rounded-sm ml-2 focus:outline-none text-red-500 text-lg"
                  onClick={handleDelete}
                  title="Delete Task"
                >
                  <MdDelete className="me-1" />
                </button>
                <button
                  className="hover:bg-green-600 hover:text-white px-3 py-1 rounded-sm ml-2 focus:outline-none text-green-500 text-lg"
                  onClick={openModal}
                  title="View Task"
                >
                  <MdVisibility className="me-1" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <form className="px-4 py-3">
            <div className="mb-3">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={updatedTask.title}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={updatedTask.description}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={updatedTask.dueDate}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
              <select
                id="priority"
                name="priority"
                value={updatedTask.priority}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                name="status"
                value={updatedTask.status}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:outline-none"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded ml-2 focus:outline-none"
                onClick={toggleEdit}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {isModalOpen && <ViewTaskModal task={task} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default TaskCard;
