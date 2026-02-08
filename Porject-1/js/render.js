
import { TaskWrapper } from "./main.js";
import { GetItem } from "./storage.js";



export function render() {




TaskWrapper.innerHTML = '';

  GetItem().forEach(item =>{


             TaskWrapper.innerHTML += `<div class="task">
                                <span id="task-title">${item.task}</span>
                                <i class="fa-solid fa-trash delete-icon" data-id="${item.id} "></i>
                                
                            </div>`;

  });



}
