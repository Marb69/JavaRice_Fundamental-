import currentWeather from "./currentWeather.js";
import { locationText } from "./main.js";

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    location.innerHTML = "Geo Location Not Supported";
  }

  async function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    currentWeather(lat, lon);

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
    );

    const data = await response.json();

    if (data) {
      locationText.innerHTML = data.address.town;
      console.log(data);
    } else {
      console.log("Not Found");
    }
  }

  function showError(error) {
    location.innerHTML = "Error: " + error.message;
  }
};
export default getLocation;
