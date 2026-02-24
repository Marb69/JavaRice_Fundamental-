import { DataTime } from "./main.js";

const currentDate = ()=>{


     
      const todayDate = new Date();
      const formated = todayDate.toDateString();

     DataTime.innerHTML = formated;

      
}



export default currentDate;