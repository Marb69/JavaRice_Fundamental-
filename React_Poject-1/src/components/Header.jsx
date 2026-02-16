import React from 'react'
import HamMenu from './HamMenu'
import { useState } from 'react';
import Nav from './nav';
const Header = () => {

    const [toggle,setToggle] = useState(false);


  return (
   

     <header className='fixed w-full p-4 '>

           <div className="flex justify-between items-center">
               <a href="" className='font-bold text-3xl text-gray-900'>Jan.</a>

               <HamMenu toggle={toggle} setToggle={setToggle}/>


               <Nav toggle={toggle}/>
           </div>
     </header>
  )
}

export default Header