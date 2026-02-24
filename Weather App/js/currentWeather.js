import baseurl from "./api.js";

const currentWeather = () => {
  const ApiFetch = async () => {
    try {
      const res = await fetch(baseurl);

      if (!res.ok) {
        console.log("Something Error in Fetching");
      }

      const data = await res.json();

      console.log(data.current_weather.temperature + data.current_weather_units.temperature);
    } catch (error) {

        console.log(error)
    }
  };

  ApiFetch();
};

export default currentWeather;
