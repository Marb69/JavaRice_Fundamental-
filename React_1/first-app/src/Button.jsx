import React from 'react'

const Button = ({link,title,bgColor,textColor}) => {
  return (
    
      <a href={link} className={`${bgColor} ${textColor} px-3 py-2 rounded-md transition duration-300`}>{title}</a>
      
  )


}

export default Button