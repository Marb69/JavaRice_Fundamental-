import React from "react";
import Button from "./Button.jsx";

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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Recipe</a>
        </li>
        <li>
          <a href="">Ph Foods</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">About Us</a>
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
