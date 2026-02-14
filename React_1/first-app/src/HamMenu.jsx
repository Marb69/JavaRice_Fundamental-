import React, { useState } from 'react'


const HamMenu = ({toggle,setToggle}) => {

    
 

  return (
    
            <div className="flex flex-col gap-1 lg:hidden" onClick={()=>{


              setToggle(!toggle);
                   
            }}>
                 
                 <div className={`w-7 h-1 rounded bg-Dark ${toggle ? "rotate-45 translate-y-2.5" : ""}` }></div>
                  <div className={`w-7 h-1 rounded bg-Dark ${toggle ? "opacity-0" : ""} `}></div>
                   <div className={`w-7 h-1 rounded bg-Dark ${toggle ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
            </div>
  )
}

export default HamMenu