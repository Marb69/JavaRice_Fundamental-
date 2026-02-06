import { render } from "./render.js";
import { GetTask, SetTask } from "./storage.js";



 let Task = GetTask();



export function obj(task){

    let taskObj = {

        Taskname:task,
        done:true
    }

  Task.push(taskObj);
  


   
}


export {Task};