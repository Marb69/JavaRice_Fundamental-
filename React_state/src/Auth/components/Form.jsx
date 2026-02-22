import { Eye, EyeClosed, User } from "lucide-react";
import React, { useState } from "react";
import Login from "../Controller/Login";
import { PostUser } from "../../api/PostUser";


const Form = ({ formShow, setformShow }) => {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [ShowPass, setShowPass] = useState(false);

function handleSubmit(e) {
    e.preventDefault();


   
    Login(Username,Password);

  }
  return (
    <form
      action=""
      className={`p-5  grid grid-cols-1 gap-4 `}
      onSubmit={handleSubmit}
    >
      <span className="text-gray-800 font-bold text-2xl">
        {formShow ? "Sign Up" : "Log In"}
      </span>

      <div className={`${formShow ? "" : "hidden"}`}>
        <label htmlFor="" className="">
          Email
        </label>
        <input
          disabled={formShow ? false : true}
          name="Email"
          type="text"
          required
          placeholder="Enter Your Username"
          className="w-full bg-neutral-200 px-5 py-3 rounded mt-2 focus:outline-gray-400"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="">
        <label htmlFor="" className="">
          Username
        </label>
        <input
          name="Username"
          type="text"
          required
          placeholder="Enter Your Username"
          className="w-full bg-neutral-200 px-5 py-3 rounded mt-2 focus:outline-gray-400"
          value={Username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Password
        </label>
        <div className="flex items-center">
          <input
            name="Password"
            type={`${ShowPass ? "Text" : "Password"}`}
            placeholder="Enter Your Password"
            required
            className="w-full bg-neutral-200 px-5 py-3 rounded mt-2  focus:outline-gray-400"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span
            className="mt-2 cursor-pointer ml-3 block"
            onClick={() => {
              setShowPass(!ShowPass);
            }}
          >
            {ShowPass ? <Eye /> : <EyeClosed />}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="bg-amber-300 p-3 rounded cursor-pointer text-gray-100"
      >
        {formShow ? "Sign Up" : "Log in"}
      </button>

      <span
        className="text-center cursor-pointer"
        onClick={() => {
          
          setformShow(!formShow)
        }}
      >
        {formShow ? "Log In " : "Sign Up"}
      </span>
    </form>
  );
};

export default Form;
