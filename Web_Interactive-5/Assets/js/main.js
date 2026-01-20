const AddBtn = document.querySelector('.add-btn');



let ToDoList = [];




function AddToDo(){


    let Input =document.querySelector('#input');

   

    if(Input.value === ''){

        alert('Please Enter Your To Do');
    }else{

         ToDoList.push(Input.value);

        Render();
    }



}

function Render(){


     const ul = document.querySelector('ul');


     ul.innerHTML = '';
     

     for (let index = 0; index < ToDoList.length; index++) {
        

        
        const li = document.createElement('li');
        const span = document.createElement('span');
        const WrapperBtn = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const mark = document.createElement('button');

        ul.appendChild(li);
        li.appendChild(span);
        span.classList = "text";
        span.innerHTML = ToDoList[index];
        li.appendChild(WrapperBtn);
        WrapperBtn.appendChild(deleteBtn);
        WrapperBtn.appendChild(mark);
        WrapperBtn.classList = 'action';
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList = 'delete';
        mark.innerHTML = 'Mark';
        mark.classList = 'mark';


        deleteBtn.addEventListener('click',()=>{

             ToDoList.splice(index,1);

             Render();
        })

          const Text = document.querySelectorAll('.text');

        mark.addEventListener('click',()=>{


          
            console.log(Text);


            for (let index = 0; index < Text.length; index++) {
               

                Text[index].classList.add('marks');
                
            }
        })

        
     }

       


}


AddBtn.addEventListener('click',AddToDo);