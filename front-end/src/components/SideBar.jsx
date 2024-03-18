// import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h3 className="text-2xl font-bold mb-4">Sidebar</h3>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className="text-blue-500"
            activeClassName="text-blue-800 font-bold"
            exact
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className="text-blue-500"
            activeClassName="text-blue-800 font-bold"
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className="text-blue-500"
            activeClassName="text-blue-800 font-bold"
          >
            Jobs
          </NavLink>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;