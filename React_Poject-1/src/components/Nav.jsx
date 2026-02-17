import React from "react";
import Profile from "../assets/image/Profile.png";
import { NavLink } from "react-router-dom";

const navlink = [
  {
    TextContent: "Home",
    Image: Profile,
    pathRoute: "/",
  },
  {
    TextContent: "Skill",
    Image: Profile,
    pathRoute: "skill",
  },
  {
    TextContent: "About",
    Image: Profile,
    pathRoute: "about",
  },
  {
    TextContent: "Gallery",
    Image: Profile,
    pathRoute: "gallery",
  },
];

const Nav = ({ toggle }) => {
  return (
    <nav
      className={` w-full bg-white rounded-2xl shadow absolute top-15 p-5 -left-400  transition-all ease-in-out duration-300 ${toggle ? "top-1/2 left-1/2 transform -translate-x-1/2" : ""} lg:bg-transparent lg:shadow-none lg:static lg:w-auto `}
    >
      <ul className="flex flex-col gap-5 lg:flex-row ">
        {navlink.map((link) => (
         <NavLink to={link.pathRoute}>

           <li
            key={link.pathRoute}
            className="p-15 font-medium text-2xl text-center rounded-2xl text-gray-100 active:bg-image relative overflow-hidden lg:text-[1rem] lg:p-0"
          >
            <div  className="flex items-center justify-center absolute top-0 left-0 active:scale-110 transition-all ease-in-out duration-100 w-full h-full sepia-50 active:sepia-0 lg:hidden " style={{

              backgroundImage:`url(${link.Image})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              
              
            }}>

          <span className="z-10 "> {link.TextContent}</span>

   

            </div>

          <span className="hidden lg:flex text-gray-800">{link.TextContent}</span>
         
          </li>
         </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
