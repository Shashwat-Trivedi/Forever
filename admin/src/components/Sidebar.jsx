import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2  border-gray-300">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-r-0 border-gray-300 px-3 py-2 rounded-1"
          to="/add"
        >
          <img src={assets.add_icon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">Add Item</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-r-0 border-gray-300 px-3 py-2 rounded-1"
          to="/list"
        >
          <img src={assets.order_icon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">List Item</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-r-0 border-gray-300 px-3 py-2 rounded-1"
          to="/orders"
        >
          <img src={assets.order_icon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">Order Item</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
