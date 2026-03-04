import React, { useState } from "react";
import Nav from "./nav";
import {  ChevronsLeft, ChevronsRight } from "lucide-react";
import AdminCta from "./AdminCta";

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <aside
      className={`relative w-20 z-1  ${openDrawer ? "lg:w-47.5 " : " "} transition-all ease-in-out duration-150 `}
    >
      <div
        className={`flex fixed w-20 flex-col h-full transition-all ease-in-out duration-150   ${openDrawer ? "w-50 absolute bg-neutral-100" : "w-20"}`}
      >
        <span
          className="absolute right-0 top-7.5 cursor-pointer transition-all ease-in-out delay-150"
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        >
          {openDrawer ? <ChevronsLeft  size={20} color="gray"/>  :  <ChevronsRight size={20} color="gray" />}
        </span>
        <div className="flex gap-4 py-5 border-b px-5 border-gray-300 w-full">
          <span className="font-bold text-3xl">
            <span className="text-gray-700">B</span>
            <span className="text-blue-500">B</span>
          </span>
          <span className="text-2xl hidden">
            <b>Buh</b>
            <b className="text-blue-500">Boh</b>
          </span>
        </div>

        <Nav openDrawer={openDrawer} />

        <div className="flex items-center gap-3 p-5 border-t border-gray-300 h-35">
          <div className="p-3 bg-blue-600 rounded font-bold text-white">AD</div>

          {openDrawer ? <AdminCta/> : '' }

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
