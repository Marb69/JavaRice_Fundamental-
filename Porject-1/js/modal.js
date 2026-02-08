import { AddBtn, ExitBtn, Modal, SaveBtn } from "./main.js";

export function modal(){

 
      
      AddBtn.addEventListener('click',()=>{

        Modal.classList.add('toggle');

      })

      ExitBtn.addEventListener('click',()=>{

        Modal.classList.remove('toggle');
      })

     SaveBtn.addEventListener('click',()=>{

        Modal.classList.remove('toggle');
     })


}