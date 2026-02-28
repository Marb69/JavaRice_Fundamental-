export const locationStat = (location) => {
  const locationStat = document.querySelector("#location-stat");

  locationStat.innerHTML = location.address.town;
};

export const weatherStat = (data) => {
  const Temp = document.querySelector("#temp-stat");
  const TempUnit = document.querySelector("#temp-deg");

  Temp.innerHTML = data.current_weather.temperature;
  TempUnit.innerHTML = data.current_weather_units.temperature;

  const windSpeed = document.querySelector("#wind-speed");
  const windSpeddUnit = document.querySelector("#wind-units");
  const windDirec = document.querySelector("#wind-direc");
  const windDirecUnit = document.querySelector("#direc-units");

  windSpeed.innerHTML = data.current_weather.windspeed;
  windSpeddUnit.innerHTML = data.current_weather_units.windspeed;
  windDirec.innerHTML = data.current_weather.winddirection;
  windDirecUnit.innerHTML = data.current_weather_units.winddirection;

  dateTime();
};

const dateTime = () => {
  const date = new Date();
  const formated = date.toDateString();

  const daterender = document.querySelector("#date-time");
  daterender.innerHTML = formated;
};


