import React from 'react'
import { HomeIcon, LayoutDashboardIcon, UserIcon } from 'lucide-react'



const icons = {

     home:HomeIcon,
     dashboard:LayoutDashboardIcon,
     user:UserIcon,


}
const Icon = ({name,classname}) => {


    const Component = icons[name];




  return (
    
    <Component className={classname}/>
    


  )
}

export default Icon