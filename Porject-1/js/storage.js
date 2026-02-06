import { Task } from "./addtask.js";

export function SetTask(){

    localStorage.setItem('task',JSON.stringify(Task));
}


export function GetTask(){

    
    return JSON.parse(localStorage.getItem('task')) || [];

}


