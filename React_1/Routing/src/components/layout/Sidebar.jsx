import React from "react";
import Nav from "./nav";

const Sidebar = () => {
  return (
    <aside className="px-5 py-4 h-screen bg-blue-400 max-w-70">
      <a href="" className="font-bold text-2xl text-gray-100">
        Bhobo Mangement System
      </a>


    <Nav/>

    </aside>
  );
};

export default Sidebar;
