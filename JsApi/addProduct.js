import { Post } from "./post.js";
import { url } from "./url.js";

export function addProduct(){


  
       const BtnAdd = document.querySelector('#AddProduct');

       BtnAdd.addEventListener('click',()=>{

     const ProductId = document.querySelector('#ProductId').value
       const ProductTitle = document.querySelector('#ProductTitle').value
       const ProductPrice = document.querySelector('#ProductPrice').value
       Number(ProductPrice);
       const ProductDes = document.querySelector('#ProductDes').value
       const ProductCate = document.querySelector('#ProductCate').value
       const ProductImage = document.querySelector('#ProductImage')

             
            if(ProductId == '' || ProductTitle == '' || ProductPrice == 0 || ProductDes == '' || ProductCate == '' || ProductImage == '' ){

                              alert('Please Fill the input fields');
                 
            }else{


                ProductImage.addEventListener('change',function(){

                    const file = this.file[0];

                    if(file){

                        const reader = new FileReader();
                        reader.onload = function (e){

                            let url = e.target.result;
                        }

                        reader.readAsDataURL(file);


                    }

                      Post(ProductId,ProductTitle,ProductPrice,ProductDes,ProductCate,url);
                })

debugger
              

            }
       })
  

}


