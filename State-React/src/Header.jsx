import React, { useState } from 'react'
import Nav from './nav';

const Header = () => {

    const [menu,setMenu] = useState(false);
  return (

    
    <header className='fixed top-0 w-full '>

       <div className="mx-auto px-4 py-3 max-w-7xl flex items-center justify-between">

         <a href="" className='font-bold text-3xl text-gray-700'>Co-Fe</a>


         <div className='flex flex-col gap-1 lg:hidden ' onClick={()=>{

            setMenu(!menu);
                          

         }}>
                 <div className={`w-7 h-1 bg-gray-700 rounded" ${menu ? "rotate-45 translate-y-2" : "" }`}></div>
                 <div className={`w-7 h-1 bg-gray-700 rounded" ${menu ? "opacity-0" : "" }`}></div>
                 <div className={`w-7 h-1 bg-gray-700 rounded" ${menu ? "-rotate-45 -translate-y-2" : "" }`}></div>
         </div>

         <Nav open={menu}/>
       </div>

       

    </header>
  )
}

export default Header