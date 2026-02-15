import React from "react";
import Sidebar from "./sidebar";
import Routes from "./Routes";





const Layout = () => {

   
  return (
    <div className="flex">
      <Sidebar />
      <Routes/>
    </div>
  );
};

export default Layout;
