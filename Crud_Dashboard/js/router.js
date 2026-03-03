import layout from "./component/layout.js";
import dashboard from "./pages/Dashboard.js";

const router = ()=>{

    const hash = location.hash;

       
     if(hash === '#'){

         layout(dashboard());
     }else{

        layout(dashboard())
     }


}

export default router;