import { lucideIcon } from "../../assets/icon/iconSvg.js";
import nav from "./nav.js";





const sidebar =  ()=>{



    return `
      
         <aside class='sidebar'>
 

            <div class='menu-logo'>
            
          <div id="menu">${lucideIcon.draweropen} ${lucideIcon.closedrawer}</div>
          <h1 class='navbrand'><span class='logo'>PK</span><span class='tag'>Payke Istore</span></h1>
           </div>


           ${nav()}
         </aside>
    
    `





}



export default sidebar;