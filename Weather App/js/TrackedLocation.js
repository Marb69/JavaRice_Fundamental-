import getLocation from "./getLocation.js";
import getWeather from "./getWeather.js";

const TrackeLocation = () => {
  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        succcess,
        console.log("No location Found"),
      );
    } else {
      alert("Geo Location not supported on your Browser");
    }
  };

  function succcess(Postion) {
    const lat = Postion.coords.latitude;
    const lon = Postion.coords.longitude;

    getLocation(lat, lon);

    getWeather(lat, lon);
  }

  geoLocation();
};

export default TrackeLocation;
