import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-gradient-to-r from-amber-500 to-pink-500 text-white p-4 px-12 flex justify-between items-center fixed top-0  z-50 w-full ">
      <div className="navbar-brand">
        TASK MASTER
        
      </div>
      <div className="flex items-center flex-row gap-8 relative">
        
        <button className="">
          Add Task
        </button>
        <FaUser className="cursor-pointer" />
       
      </div>
    </div>
  );
};

export default Header;
