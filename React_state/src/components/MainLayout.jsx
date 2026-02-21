import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    
      <div className='flex flex-col'>
          
      <div className='h-35'>

        <Header/>
      </div>


          <main>

            <div className="max-w-7xl mx-auto">
                 <Outlet/>
            </div>
          </main>
      </div>
  )
}

export default MainLayout