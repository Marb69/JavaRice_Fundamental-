import React from 'react'
import Button from './Button.jsx'

const Nav = ({toggle}) => {
  return (
    <nav className={`flex flex-col gap-4 absolute top-0 bg-amber-100 px-5 py-4 ${toggle ? 'left-0' : '-left-200'}`}>

      <ul className="flex flex-col list-none gap-1.5 lg:flex-row">
        <li>Home</li>
        <li>Reciep</li>
        <li>Country Foods</li>
        <li>Gallery</li>
        <li>About Us</li>

      </ul>


    <Button link={'example' } title="Contact Us" bgColor="bg-yellow-600" textColor="text-white"></Button>
      
    
     </nav>
  )
}

export default Nav
