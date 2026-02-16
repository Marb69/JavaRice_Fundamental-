import React from 'react'
import HeroImage from '../assets/image/HeroImage'

const Home = () => {
  return (
   <>

      <div className='flex flex-col gap-2'>

            <div className="flex-1 flex flex-col">

                <h1>Hello I'am Jan, Wellcome to my react project</h1>
                <p>This project has made from scratch using react js I hope you like It.</p>

                 
            </div>

            <div className="lfex-1">

               <HeroImage/>
            </div>
      </div>
   
   
   </>
  )
}

export default Home