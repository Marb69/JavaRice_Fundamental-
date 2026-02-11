import React from 'react'

const Nav = ({open}) => {
  return (
    

    <nav className={`bg-gray-500 absolute top-0 w-3xs p-10 ${open ? "left-0" : "-left-200"} transition-all ease-in-out delay-100 h-screen lg:static lg:bg-transparent lg:transition-none lg:h-auto`}>

        <ul className='flex flex-col gap-4 font-medium lg:flex-row '>
            <li>Home</li>
            <li>Coffe</li>
            <li>Blogs</li>
            <li>About</li>
        </ul>

    </nav>
  )
}

export default Nav