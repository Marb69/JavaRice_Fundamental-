import Nav from "./component/Nav.js";

document.addEventListener('DOMContentLoaded',()=>{


     const Header = document.querySelector('#header');


     Header.innerHTML = Nav();
})