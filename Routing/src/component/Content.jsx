import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <div className='h-auto bg-neutral-50 w-full shadow rounded-2xl overflow-hidden '>

        <Header/>


        <main>

           
           <div className="p-3 container">
                 
              <Outlet/>


            
           </div>

            
        </main>
      
    </div>

    
  )
}

export default Content
