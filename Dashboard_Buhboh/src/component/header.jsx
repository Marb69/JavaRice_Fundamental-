import { Bell } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
  
    <header className='sticky top-0'>
       <div className=' bg-neutral-50  py-4 px-8 flex justify-between '>
         <span className='font-bold text-2xl text-gray-700'>Dashboard</span>

        <span className='flex items-center gap-4'>
            <span className='cursor-pointer'>
                <Bell color='#989090'/>
            </span>

            <button className='px-4 py-2 text-white bg-blue-600 rounded cursor-pointer hidden md:block'>
              + Quick Add
            </button>
        </span>
       </div>
    </header>
  )
}

export default Header;