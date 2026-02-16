import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    
    <nav className='mt-20 px-3 '>


    <ul className='flex flex-col gap-5 font-medium text-[1.1rem] text-gray-50'>
        <NavLink to='/'>
        <li>Dashbord</li>
        </NavLink>
       <NavLink to='/user'>
        <li>User</li>
        </NavLink>
       <NavLink to='/addpeople'>
        <li>Add People</li>
        </NavLink>
       <NavLink to='/details'>
        <li>Details</li>
        </NavLink>
    </ul>

    </nav>
  )
}

export default Nav
