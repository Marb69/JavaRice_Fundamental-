import { Box, LayoutDashboard, Plus, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navlink = [
    {
      path: "/",
      icon: LayoutDashboard,
      text: "Dashaboard",
    },
    {
      path: "/addproduct",
      icon: Plus,
      text: "Dashaboard",
    },
    {
      path: "/product",
      icon: Box,
      text: "Dashaboard",
    },
    {
      path: "/user",
      icon: User,
      text: "Dashaboard",
    },
   
  ];
  return (
    <nav className="h-auto mt-10">
      <ul className="flex flex-col gap-4">
        {navlink.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
             
               <span><Icon size={25} color="#704e05"/></span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
