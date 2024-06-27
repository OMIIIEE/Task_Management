import React from 'react';
import { MdClose,MdAccessTime } from 'react-icons/md';

const ViewTaskModal = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">TITLE : {task.title}</h2>
        <p className="text-gray-700 mb-2">DESCRIPTION : {task.description}</p>
        <div className="flex items-center mb-2">
          <MdAccessTime className="text-gray-500" />
          <small className="ml-1">DUE DATE : {new Date(task.dueDate).toLocaleDateString()}</small>
        </div>
        <div className="mb-2">
        TASK PRIORITY : 
          <span className={`px-2 py-1 text-sm rounded ${
            task.priority === 'high' ? 'bg-red-500 text-white' :
            task.priority === 'medium' ? 'bg-yellow-500 text-gray-900' :
            'bg-green-500 text-white'
          }`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
        </div>
        <div>
            TASK STATUS : 
          <span className={`px-2 py-1 text-sm rounded ${
            task.status === 'pending' ? 'bg-yellow-500 text-gray-900' :
            task.status === 'completed' ? 'bg-green-500 text-white' :
            'bg-blue-500 text-white'
          }`}>
            {task.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;
