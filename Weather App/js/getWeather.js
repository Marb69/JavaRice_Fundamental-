import { weatherStat } from "./Ui.js";


const getWeather = async (lat,lon)=>{


    try {


        const res = await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);

        if(!res.ok){

            console.log('Something Wrong')
            return
        }

        const data = await res.json();

        weatherStat(data);
        

     
        
    } catch (error) {
        
        console.log(error)
    }finally{

         
        const loader = document.querySelector('.loading-screen');
        loader.classList.add('hide');

        const mainUi = document.querySelector('.main');

        mainUi.classList.add('show');
    }



}


export default getWeather;