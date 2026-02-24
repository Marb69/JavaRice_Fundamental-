import { temperatureDeg, temperatureNum } from "./main.js";


const currentWeather = (lat,lon) => {


  const ApiFetch = async () => {

    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);

      if (!res.ok) {
        console.log("Something Error in Fetching");
      }

      const data = await res.json();


      temperatureNum.innerHTML = data.current_weather.temperature;
      temperatureDeg.innerHTML = data.current_weather_units.temperature;
      console.log(data.current_weather.temperature + data.current_weather_units.temperature);
    } catch (error) {

        console.log(error)
    }
  };

  ApiFetch();
};

export default currentWeather;
