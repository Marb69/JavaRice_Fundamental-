import {
  ArrowRightLeft,
  Box,
  Clipboard,
  FileChartColumnIncreasing,
  LayoutDashboard,
  Plus,
  User,
  UserRound,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ openDrawer }) => {
  const navlink = [
    {
      path: "/",
      icon: LayoutDashboard,
      text: "Dashboard",
    },
    {
      path: "/addproduct",
      icon: UserRound,
      text: "Members",
    },
    {
      path: "/product",
      icon: Clipboard,
      text: "Loans",
    },
    {
      path: "/user",
      icon: ArrowRightLeft,
      text: "Transactions",
    },
    {
      path: "/report",
      icon: FileChartColumnIncreasing,
      text: "Reports",
    },
  ];
  return (
    <nav className="h-full mt-10 p-5">
      <ul className="flex flex-col gap-7">
        {navlink.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.path}
              className="group flex gap-4 items-center hover:bg-blue-100 px-3 py-2 rounded transition-all ease-in-out duration-150 "
              onhove
            >
              <span>
                <Icon size={20} color="#989090" />
              </span>
              <span
                className={`${openDrawer ? "opacity-100 " : "opacity-0 block"} font-medium text-gray-600 group-hover:text-blue-400 `}
              >
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
