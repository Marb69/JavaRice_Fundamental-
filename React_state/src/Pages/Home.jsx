import React, { useEffect, useState } from "react";
import { getProduct } from "../api/GetProduct.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="mt-4">
      <span className="font-bold text-2xl">Product List</span>

      <div className="grid grid-cols-5 gap-5 mt-4 ">
        {useEffect(() => {
          getProduct().then((res) => setProducts(res.data));
        }, [])}

        {
            products.map((item)=>(

                 <ProductCard img={item.image} desc={item.description} price={item.price} title={item.title} rate={item.rating.rate} count={item.rating.count}/>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
