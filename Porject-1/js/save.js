
import { task } from "./Interface.js";
import { AddTask, SaveBtn } from "./main.js";
import { render } from "./render.js";
import { data, SetItem } from "./storage.js";


export function save(){

    SaveBtn.addEventListener('click',()=>{


    let InputValue = AddTask.value;

    if(InputValue == ''){

        alert('Please fill the input Field')
    }else{

       
        data.push(new task(InputValue));

        SetItem();
        render();

        AddTask.value = '';
    }
})
}