export const Card = (data)=>{

const products = document.querySelector('.products');
 products.innerHTML = '';



    data.map((item)=>(


        products.innerHTML += `

           <div class="item">
                       
                     <img src="${item.image}" alt="" >
                      <div class="context">
                         <h1>${item.title}</h1>
                         
                       <p >${item.price}</p>
                       <p >${item.category}</p>
                       <p >${item.description}</p>
                      </div>
                       
                  </div>
        
        `
       

        


    )  )

        

}