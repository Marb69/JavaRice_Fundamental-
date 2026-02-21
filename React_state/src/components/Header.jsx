import React from "react";
import Nav from "./Nav.jsx";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col">
      <header className="mb-4 flex justify-between">
        <a href="" className="font-bold text-3xl text-shadow-gray-900">
          FakeStore
        </a>

        <div className="flex gap-5 ">

            <span>Signup</span>
            <span>Log in</span>

            <span className="cursor-pointer">
               <ShoppingCart />
            </span>
        </div>

      </header >

       <Nav />
    </div>
  );
};

export default Header;
