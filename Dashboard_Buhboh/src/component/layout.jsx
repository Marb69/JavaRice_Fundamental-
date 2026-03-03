import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import dashboard from '../pages/dashboard'
import Dashboard from '../pages/dashboard'

const Layout = () => {
  return (
   

      <div className='flex h-screen '>
         <Sidebar/>

           <main className='flex-1'>

           <Header/>


            <div>
                {<BrowserRouter>


                <Routes>

                    <Route path='/' element={<Dashboard/>}/>
                </Routes>
                
                </BrowserRouter>}
            </div>

           </main>
      </div>
  )
}

export default Layout