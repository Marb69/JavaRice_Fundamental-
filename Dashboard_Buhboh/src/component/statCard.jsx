import { ArrowUp, CircleDollarSignIcon } from "lucide-react";
import React from "react";

const StatCard = ({icon,title,number,warn,contri}) => {
  return (
    <>
      <div className="p-5 bg-white border-gray-300 border rounded flex flex-col gap-2 flex-1 md:flex-none">
        <div>
           {icon}
        </div>
        <div className="text-gray-500 font-medium">{title}</div>
        <div className="font-medium text-3xl">{'₱'+number}</div>
        <div  className={ `${warn ? 'text-green-300' : 'text-red'} text-gray-500 flex`}>
          <ArrowUp />
         <span>{contri}</span>
        </div>
      </div>
    </>
  );
};

export default StatCard;
