import React from "react";
import Icon from "../icon/icon";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-screen flex-1 bg-white">
      <header className="bg-gray-200 p-4 flex justify-between">
        <span className="font-medium text-gray-700 text-2xl">Dashboard</span>

        <span className="flex gap-4">
          <Icon name={"user"} classname={""} />
          Admin
        </span>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
