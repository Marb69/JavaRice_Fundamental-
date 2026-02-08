import { TaskInput, TaskWrapper } from "./main.js";
import { GetItem } from "./storage.js";

export function searchTask(){


      TaskInput.addEventListener('input',()=>{

        let TaskData = GetItem();
    
 
        let filtered = TaskData.filter(item=>item.task.toLowerCase().includes(TaskInput.value.toLowerCase()));
        
        TaskWrapper.innerHTML = "";
        filtered.forEach((item)=>{

             TaskWrapper.innerHTML += `<div class="task">
                                <span id="task-title">${item.task}</span>
                                <i class="fa-solid fa-trash delete-icon" data-id="${item.id} "></i>
                                
                            </div>`;
        })
          
     });
}