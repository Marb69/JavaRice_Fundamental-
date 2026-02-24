import currentWeather from "./currentWeather.js"
import getLocation from "./getLocation.js";


export const location = document.querySelector(".Location")


document.addEventListener('DOMContentLoaded',()=>{


    
       

      getLocation();
      currentWeather();
})