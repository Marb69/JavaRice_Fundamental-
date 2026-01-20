const OpenBtn = document.querySelector('.open-btn');
const CloseBtn = document.querySelector('#close-btn');
const Modal = document.querySelector('.modal');



function OpenModal(){


    Modal.classList.add('open');

     
}


function CloseModal(){

    Modal.classList.remove('open');
}


OpenBtn.addEventListener('click',OpenModal);

CloseBtn.addEventListener('click',CloseModal);


Modal.addEventListener('click',(event)=>{

    if(event.target == Modal){

        CloseModal();

    }
})

Modal.addEventListener('keydown',(event)=>{

    if(event.key === 'Escape'){

        CloseModal();
    }
})