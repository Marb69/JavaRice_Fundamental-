import React from "react";




const HamMenu = ({toggle,setToggle}) => {
  return (
    <div className="flex flex-col gap-1"  onClick={()=>{

          setToggle(!toggle)
    }}>
      <div className={` w-7 h-1 bg-gray-400 rounded ${toggle ? '-translate-x-1.5' : ''}`}></div>
      <div className={` w-7 h-1 bg-gray-400 rounded ${toggle ? 'translate-x-1' : '' }`}></div>
      <div className={` w-7 h-1 bg-gray-400 rounded ${toggle ? '-translate-x-1.5' : ''}`}></div>
    </div>
  );
};

export default HamMenu;
