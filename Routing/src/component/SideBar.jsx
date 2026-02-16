import React from "react";
import Nav from "./Nav";

const SideBar = () => {
  return <div className="p-5 min-w-60 h-auto bg-blue-400 shadow rounded-2xl">

   <span className="font-bold text-2xl text-white">
      Bhobo Management System
   </span>

    <Nav/>

    <button className="bg-gray-300 px-3 py-2 rounded-2xl text-gray-800  mt-130">Logout</button>

  </div>;
};

export default SideBar;
