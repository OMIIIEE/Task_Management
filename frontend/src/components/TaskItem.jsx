import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task._id);
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
