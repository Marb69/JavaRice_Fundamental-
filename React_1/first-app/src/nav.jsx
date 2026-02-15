import React from "react";
import Button from "./Button.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({ toggle }) => {
  return (
    <nav
      className={`flex flex-col items-start rounded-r-3xl absolute top-0
                bg-Light py-3 px-6 h-screen w-80 transition-all ease-in-out
                  duration-300
                  lg:h-auto lg:bg-transparent lg:p-none lg:static lg:w-auto
                  lg:flex-row lg:items-center lg:flex-1 lg:transition-none
                  
                  ${toggle ? "left-0" : "-left-200"}`}
    >
      <a href="" className="font-bold text-2xl text-Primary lg:hidden">
        Tara-Luto
      </a>

      <ul className="flex flex-col list-non mb-10 gap-4.5 mt-10 font-medium text-Dark lg:flex-row lg:m-auto lg:gap-6 ">
        <li>
          <NavLink to="/">
            <a>Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Recipe">
            <a>Recipe</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/PhFood">
            <a>Ph Foods</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery">
            <a>Gallery</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">
            <a>About</a>
          </NavLink>
        </li>
      </ul>

      <Button
        link={"example"}
        title="Contact Us"
        bgColor="bg-Primary"
        textColor="text-Light"
      ></Button>
    </nav>
  );
};

export default Nav;
