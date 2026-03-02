import nav from "./nav.js";



const layout = (content) => {


   function menuToggle(){

      const sidebar = document.querySelector('.sidebar');

      sidebar.classList.add = 'toggle'
      console.log('click')
}



 
  const app = document.getElementById("app");

  app.innerHTML = `
    

       <div class='layout'>


         <aside class='sidebar'>
 

            <div class='menu-logo'>
            
          <div class='menu' onlick='menuToggle()'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
          <h1 class='navbrand'><span class='logo'>PK</span><span class='tag'>Payke Istore</span></h1>
           </div>


           ${nav()}
         </aside>

         <main class='main'>
           ${content}
         </main>
       
       </div>
    
    `;
};

export default layout;
