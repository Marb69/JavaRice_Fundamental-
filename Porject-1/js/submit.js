
import { obj } from "./addtask.js";
import { render } from "./render.js";
import { GetTask, SetTask} from "./storage.js";

export function submit() {


  const AddBtn = document.querySelector("#add-sub");
  const TaskInput = document.querySelector("#input-task");

  AddBtn.addEventListener("click", () => {
    let InputValue = TaskInput.value;


    if(InputValue == '' ){

      const ok =   alert('fill the input field');

    }else{

    obj(InputValue);
    TaskInput.value = '';
    
    SetTask();

    render();

    }

  
  });

  
}
