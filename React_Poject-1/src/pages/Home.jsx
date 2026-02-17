import React from "react";
import HeroImage from "../assets/image/HeroImage";
import Button from "../components/button";


const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-5 px-6 mx-auto max-w-120 md:max-w-160 lg:max-w-7xl pt-20 lg:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start md:items-center lg:items-start">
          <h1 className="font-bold text-3xl text-center text-gray-600 mb-6 lg:text-start ">Hello I'am Jan, Wellcome to my react project</h1>
          <p className="font-medium text-gray-400 text-center lg:text-start ">
            This project has made from scratch using react js I hope you like
            It.
          </p>

       <Button text={"Contact Me"} bgBtn={'bg-gray-500'}/>
        </div>

        <div className="flex-1">
          <HeroImage classname={'w-full'}/>
        </div>
      </div>
    </>
  );
};

export default Home;
