import currentDate from "./currentDate.js";
import getLocation from "./getLocation.js";

export const locationText = document.querySelector(".Location");
export const CheckWeatherBtn = document.querySelector("#check-weather-btn");
export const temperatureNum = document.querySelector(".num");
export const temperatureDeg = document.querySelector(".deg");
export const DataTime = document.querySelector(".date-time");

document.addEventListener("DOMContentLoaded", () => {
  getLocation();
  currentDate();
});
