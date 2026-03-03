import React from 'react'
import Nav from './nav';

const Sidebar = () => {
  return (
      <aside className='p-5 bg-neutral-50'>

            <div className='flex gap-4'>
                <span>Pk</span>
                <span className='hidden'>Pyake Istore</span>
            </div>

            {Nav()}

           </aside>

  )
}

export default Sidebar;