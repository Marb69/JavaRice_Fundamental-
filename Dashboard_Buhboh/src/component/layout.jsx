import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dashboard from "../pages/dashboard";
import Dashboard from "../pages/dashboard";

const Layout = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />

      <div className="flex-1 relative">
        <Header />

        <main className=" p-8 bg-neutral-100 pt-30  ">
          {
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </BrowserRouter>
          }
        </main>
      </div>
    </div>
  );
};

export default Layout;
