import React from 'react'
import SideBar from './SideBar'
import Content from './Content'

const Layout = () => {
  return (
    <div className='flex p-5 h-screen bg-neutral-100 gap-3.5 '>

        <SideBar/>

        <Content/>
      
    </div>
  )
}

export default Layout
