import React from "react";
import moment from "moment";
import clsx from "clsx";
import { MdKeyboardDoubleArrowUp, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Loading from "../components/Loader";
import UserInfo from "../components/UserInfo";
import { PRIOTITYSTYELS, TASK_TYPE } from "../utils";

const TaskTable = ({ tasks, onDelete }) => {
  const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
  };

  const handleDelete = (taskId) => {
    // Implement delete functionality
    onDelete(taskId);
  };

  return (
    <div className="w-full bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded">
      <table className="w-full">
        <thead className="border-b border-gray-300 ">
          <tr className="text-black text-left">
            <th className="py-2">Task Title</th>
            <th className="py-2">Priority</th>
            <th className="py-2">Team</th>
            <th className="py-2 hidden md:block">Created At</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} className="border-b border-gray-300 text-gray-600 hover:bg-gray-300/10">
              <td className="py-2">
                <div className="flex items-center gap-2">
                  <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])} />
                  <p className="text-base text-black">{task.title}</p>
                </div>
              </td>
              <td className="py-2">
                <div className="flex gap-1 items-center">
                  <span className={clsx("text-lg", PRIOTITYSTYELS[task.priority])}>
                    {ICONS[task.priority]}
                  </span>
                  <span className="capitalize">{task.priority}</span>
                </div>
              </td>
              <td className="py-2">
                <div className="flex">
                  {task.team.map((m, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1"
                      )}
                    >
                      <UserInfo user={m} />
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-2 hidden md:block">
                <span className="text-base text-gray-600">
                  {moment(task?.date).fromNow()}
                </span>
              </td>
              <td className="py-2">
                <button onClick={() => handleDelete(task._id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
                {/* Add edit button and functionality as per your assignment requirements */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
