import { deletetask } from "./deletetask.js";
import { checkmark } from "./checkmark.js";
export function template(taskname,index) {


return `<div class="task">

                    <div class="task-label">
                         <span id="task-title">${taskname.Taskname}</span>
                          

                    <span id="delete-icon" onclick = "deletetask(${index})">
                        <i class="fa-solid fa-trash"></i>
                      
                    </span>
                    </div>
                    
                </div>`

      
}
