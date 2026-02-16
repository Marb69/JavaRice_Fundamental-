import React from "react";

const Nav = ({toggle}) => {
  return (
    <nav className= {`bg-neutral-200 h-210 rounded-2xl shadow absolute top-15 p-5 w-100 -left-400 transition-all ease-in-out duration-300 ${toggle ? 'left-3.5' : ''}`}>
      <ul className="flex flex-col gap-2">
        <li className="p-10 font-medium text-2xl text-center bg-amber-50 rounded-2xl text-gray-600">Home</li>
        <li className="p-10 font-medium text-2xl text-center bg-amber-50 rounded-2xl text-gray-600">Skill</li>
        <li className="p-10 font-medium text-2xl text-center bg-amber-50 rounded-2xl text-gray-600">About</li>
        <li className="p-10 font-medium text-2xl text-center bg-amber-50 rounded-2xl text-gray-600">Gallery</li>
       
      </ul>
    </nav>
  );
};

export default Nav;
