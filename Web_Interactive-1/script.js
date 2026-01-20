const TexCount = document.querySelector('.count');
const CounterBtn = document.querySelector('.counter-btn');


let count = 0;


CounterBtn.addEventListener('click',()=>{

    count++;
    TexCount.textContent = count;
})

const BtnShowHide = document.querySelector('.hide-btn')
const textContent = document.querySelector('.text')

BtnShowHide.addEventListener('click',()=>{

     textContent.classList.toggle('hide');
       
     if(BtnShowHide.innerHTML == 'Click To Hide'){

        BtnShowHide.innerHTML = 'Click To Show'
     }else{

        BtnShowHide.innerHTML = 'Click To Hide'
     }
        
})



const BoxColor = document.querySelector('.box-color');
const ColorBtn = document.querySelector('.random-btn');


const colors = ['blue','green','yellow','red','pink','black','orange','gray','violet','brown'];

const TextColor = document.querySelector('.text-color');




ColorBtn.addEventListener('click',()=>{

    const random = Math.random(11);
    let RadomizeNum = Math.ceil(random * 10) + 1;
    
    let colorText = colors[RadomizeNum];

    BoxColor.style.backgroundColor = colorText;
    

    switch (colorText){

        case 'blue':

              TextColor.innerHTML = 'The box Color is Blue'
        break;
         case 'green':

              TextColor.innerHTML = 'The box Color is green'
        break;
         case 'yelllow':

              TextColor.innerHTML = 'The box Color is yelllow'
        break;
         case 'red':

              TextColor.innerHTML = 'The box Color is red'
        break;
         case 'pink':

              TextColor.innerHTML = 'The box Color is pink'
        break;
         case 'black':

              TextColor.innerHTML = 'The box Color is black'
        break;
         case 'orange':

              TextColor.innerHTML = 'The box Color is orange'
        break;
         case 'gray':

              TextColor.innerHTML = 'The box Color is gray'
        break;
         case 'violet':

              TextColor.innerHTML = 'The box Color is violet'
        break;
         case 'brown':

              TextColor.innerHTML = 'The box Color is brown'
        break;
    }
})


const InputField = document.querySelector('#input');
const ValueInput = document.querySelector('.input-value');
const SubmitBtn = document.querySelector('.btn-submit');


SubmitBtn.addEventListener('click',()=>{

      ValueInput.innerHTML = InputField.value.length;
})