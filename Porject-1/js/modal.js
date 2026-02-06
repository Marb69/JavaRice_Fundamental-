import { Task } from "./addtask.js";
import { render } from "./render.js";
import { GetTask } from "./storage.js";

export function modal(){


     const modal = document.querySelector('#modal');
     const OpenBtn = document.querySelector('#add-task');
     const CloseBtn = document.querySelector('#exit');
     const AddBtn = document.querySelector("#add-sub");

     OpenBtn.addEventListener('click',()=>{

          modal.classList.add('toggle');
     

         
     
     })

     CloseBtn.addEventListener('click',()=>{

          modal.classList.remove('toggle');

     })

   AddBtn.addEventListener('click',()=>{

     modal.classList.remove('toggle');
       render();
   
    
   })
 
}