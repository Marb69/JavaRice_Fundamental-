import { lucideIcon } from "../../assets/icon/iconSvg.js";

const nav = ()=>{

    return `
    
       <nav class='navbar'>


        <ul class='nav'>
            <li><a href='#'><span class='icon'>${lucideIcon.dashboard}</span><span class='navtext'>Dashboard</span></a></li>
            <li><a href='#'><span class='icon'>${lucideIcon.product}</span><span class='navtext'>Products</span></a></li>
            <li><a href='#'><span class='icon'>${lucideIcon.addproduct}</span><span class='navtext'>Add Product</span></a></li>
            <li><a href='#'><span class='icon'>${lucideIcon.user}</span><span class='navtext'>User List</span></a></li>
        </ul>


    </nav>
 
    `
 
}

export default nav;