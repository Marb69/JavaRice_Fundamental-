import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <MainLayout></MainLayout>
    </>
  );
};

export default Layout;
