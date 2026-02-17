import React from 'react'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

const App = () => {
  return (
    
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App