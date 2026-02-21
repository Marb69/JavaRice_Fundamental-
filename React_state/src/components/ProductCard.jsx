import React from 'react'
import Product from '../assets/product.jpg';
import { Star } from 'lucide-react';

const ProductCard = ({title,price,desc,rate,count,img}) => {
  return (
    <div className='p-4 rounded-2xl shadow'>


      <img src={img} alt="" />


    <div className="flex flex-col gap-4 mt-4 p-4">

          <span className='font-medium'>{title}</span>
          <span className=''>{price}</span>
          <span>
            <p>{rate}</p>
             <p>{count}</p>
          
          </span>

          <span>

             {`${desc.slice(0,100)}....`}
          </span>
    </div>

    </div>
  )
}

export default ProductCard