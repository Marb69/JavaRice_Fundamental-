import navbar from "./navbar.js";
import Route from "./router.js";

const layout =  (content) =>{
    debugger

  const app = document.getElementById('app');

  app.innerHTML = `
  
  
         <header class="header">
         <a href="#" class="navbrand">Kopi</a>
          ${navbar()}
         </header>

         <main>
         ${content}
         </main>
         
         `

         
     
}

export default layout;