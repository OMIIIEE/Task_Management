import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Button } from 'reactstrap';
import { X } from 'lucide-react';

const AddTask = ({ onAdd, closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description, dueDate, priority, status };
      await axios.post('http://localhost:5000/api/tasks', newTask);
      onAdd(newTask);
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('medium');
      setStatus('pending');
      closeModal(); // Close the modal after adding task
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm bg-[#5AB2FF] flex flex-col justify-center items-center h-auto overflow-y-auto z-50 -mt-8">
      <div className="mt-10 flex flex-col gap-2 h-[100vh]">
        <button className="place-self-end" onClick={closeModal}>
          <X size={30} />
        </button>
        <div className="rounded-xl px-8 py-8 bg-indigo-600 flex flex-col gap-2 items-center mx-4 w-[500px]">
          <h2 className="text-center mb-2 text-4xl text-white font-comforter">Add Task</h2>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <FormGroup className="col-span-1">
              <label className="text-white">Title:</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Task Title"
                className="w-full p-2.5 rounded-lg border-none text-base"
                required
              />
            </FormGroup>
            <FormGroup className="col-span-1">
              <label className="text-white">Description:</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Task Description"
                className="w-full p-2.5 rounded-lg border-none text-base h-32"
                required
              />
            </FormGroup>
            <FormGroup className="col-span-1">
              <label className="text-white">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2.5 rounded-lg border-none text-base"
                required
              />
            </FormGroup>
            <FormGroup className="col-span-1">
              <label className="text-white">Priority:</label>
              <select
                name="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2.5 rounded-lg border-none text-base"
                required
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </FormGroup>
            <FormGroup className="col-span-2">
              <label className="text-white">Status:</label>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2.5 rounded-lg border-none text-base"
                required
              >
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </FormGroup>
            <Button
              className="col-span-2 inline-block px-6 py-2 bg-white text-[#5AB2FF] font-medium border-2 rounded hover:bg-transparent hover:text-white transition-colors duration-300 mt-4"
              type="submit"
              color="success"
            >
              Add Task
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;






// import React, { useState } from 'react';
// import axios from 'axios';

// const AddTask = ({ onAdd }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('medium');
//   const [status, setStatus] = useState('pending');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newTask = { title, description, dueDate, priority, status };
//       await axios.post('http://localhost:5000/api/tasks', newTask);
//       onAdd(newTask);
//       setTitle('');
//       setDescription('');
//       setDueDate('');
//       setPriority('medium');
//       setStatus('pending');
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//       />
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="high">High</option>
//         <option value="medium">Medium</option>
//         <option value="low">Low</option>
//       </select>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="pending">Pending</option>
//         <option value="inprogress">In Progress</option>
//         <option value="completed">Completed</option>
//       </select>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;
