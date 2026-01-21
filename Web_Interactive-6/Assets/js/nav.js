export function Navbar(){


    const Nav = document.querySelector('.nav');
    const OpenMenu = document.querySelector('#menu-btn');
    const navlink = document.querySelectorAll('.link');


    OpenMenu.addEventListener('click',()=>{

         Nav.classList.toggle('toggle-open');

         navlink.forEach((link)=>{

            link.classList.toggle('toggle-open');
         })
    })


      
}

