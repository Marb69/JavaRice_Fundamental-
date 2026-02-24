import { location } from "./main.js";

const getLocation = () => {
  

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      location.innerHTML = "Geo Location Not Supported";
    }

    
  }

  getLocation();


  async function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

      location.innerHTML = lat;

        // Reverse geocoding to get location name
  const response = await fetch(
   "https://nominatim.openstreetmap.org/reverse?lat=7.4478&lon=125.8072&format=json"
  );

  const data = await response.json();

  if (data && data.results && data.results.length > 0) {
      location.innerHTML = data.addre
  } else {
    document.getElementById("location").innerText =
      "Location not found";
  }
  }

  function showError(error) {
  
    location.innerHTML = "Error: " + error.message;
}
};

export default getLocation;
