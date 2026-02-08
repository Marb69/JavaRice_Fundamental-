import { TaskWrapper } from "./main.js";
import { render } from "./render.js";
import { data, GetItem, SetItem } from "./storage.js";

export function deleteTask() {
  TaskWrapper.addEventListener("click", (e) => {

    debugger
    if (e.target.classList.contains("delete-icon")) {



  
      let id = Number(e.target.dataset.id);

        const currentData = GetItem();
      data.splice(0, data.length, ...currentData.filter((item) => item.id !== id));


      SetItem();
      render();
     

      
    }
  });
}
