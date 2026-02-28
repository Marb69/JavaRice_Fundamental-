import TrackeLocation from "./TrackedLocation.js";


document.addEventListener("DOMContentLoaded", () => {
  TrackeLocation();

  const checkBtn = document.querySelector("#check-btn");

  checkBtn.addEventListener("click", () => {
    window.location.href = "weatherPage.html";

   
  });

 
});
