import { locationStat } from "./Ui.js";


const getLocation = async (lat, lon) => {


  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&email=your@email.com`,
    );

    if (!res.ok) {
      console.log("Api Problem");
      return;
    }

    const data = await res.json();

    if (data) {
      

      locationStat(data);

    } else {
    
        console.log('Something wrong')
    
     }
  } catch (error) {
    console.log(error);
  } finally{

         const loader = document.querySelector('.loading-screen');
        loader.classList.add('hide');

        const mainUi = document.querySelector('.main');

        mainUi.classList.add('show');
  }
  
}

export default getLocation;