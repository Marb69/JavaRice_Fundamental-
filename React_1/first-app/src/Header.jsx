import React, { useState } from 'react'
import HamMenu from './HamMenu.jsx'
import Nav from './nav.jsx'

const header = () => {
 const [toggle,setToggle] = useState(false);
  

  return (
   
       <header className='fixed top-0 w-full backdrop:blur-3xl h-8 '>

          <div className="flex mx-auto px-3 py-2 items-center justify-between lg:max-w-7xl lg:justify-normal
          ">

            <a href="" className='font-bold text-2xl text-Primary lg:text-3xl '>Tara-Luto</a>

            <HamMenu toggle={toggle} setToggle={setToggle} ></HamMenu>

            <Nav toggle={toggle}></Nav>

          </div>
     </header>
  )
}

export default header

