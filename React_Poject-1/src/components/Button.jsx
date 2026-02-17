import React from 'react'

const Button = ({text,bgBtn}) => {
  return (
   
    <button className={`cursor-pointer w-full md:w-auto px-4 py-2 mt-4 rounded ${bgBtn} text-white`}>

        {text}
    </button>
  )
}

export default Button