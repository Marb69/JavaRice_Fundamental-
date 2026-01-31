import { person } from "./model.js";

const persons = [];


persons.push(new person('jhon',19,'male'));
persons.push(new person('Marbs',20,'Male'));

function saveDate(){

     localStorage.setItem('Person',JSON.stringify(persons));
}


function getUser(){

      return JSON.parse(localStorage.getItem('Person')) || [];
}

saveDate();

const data = getUser();


    

    data.forEach(user => {
        
        
        console.log(user.name);
        console.log(user.age);
        console.log(user.sex);
    });
