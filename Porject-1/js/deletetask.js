import { Task } from "./addtask.js";
import { render } from "./render.js";
import { GetTask, SetTask } from "./storage.js";



export function deletetask(index) {




  Task.splice(index, 1);


  SetTask();
  render();

}


window.deletetask = deletetask;