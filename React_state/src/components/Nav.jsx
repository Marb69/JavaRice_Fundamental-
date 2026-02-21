import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   

      <nav className='shadow bg-neutral px-5 py-3 rounded-4xl flex '>

          <ul className='flex max-w-7xl mx-auto gap-10 font-medium'>
            <li><NavLink>Men Clothing</NavLink></li>
              <li><NavLink>Women Clothing</NavLink></li>
                <li><NavLink>Electronics</NavLink></li>
                  <li><NavLink>Jewelry</NavLink></li>
          </ul>
      </nav>
  )
}

export default Nav
