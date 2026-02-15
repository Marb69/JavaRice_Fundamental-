import React from "react";
import Icon from "../icon/icon";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-20 ">
      <ul className="flex flex-col gap-5 font-medium text-gray-100">
        <li className="flex items-end gap-2 cursor-pointer hover:text-gray-300 transition-all ease-in-out duration-150">
          <NavLink to='/'>
            <Icon name={"dashboard"} />
            Dashboard
          </NavLink>
        </li>
        <li className="flex items-end gap-2 cursor-pointer hover:text-gray-300 transition-all ease-in-out duration-150">
          <Icon name={"dashboard"} />
          Dashboard
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Nav;
