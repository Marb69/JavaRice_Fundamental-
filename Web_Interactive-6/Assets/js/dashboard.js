 
import {Product} from './product.js'
  
 export function  dashboard(name,price,stock){


    let Products = [];


    


         Products.push(new Product(name,price,stock));
        console.log(Products);

     
}