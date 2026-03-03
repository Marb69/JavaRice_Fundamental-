import nav from "./nav.js";
import sidebar from "./sidebar.js";

const layout = (content) => {
  const app = document.getElementById("app");

  app.innerHTML = `
    

       <div class='layout'>

            ${sidebar()}
     

         <main class='main'>
           ${content}
         </main>
       
       </div>
    
    `;

  function initSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const menu = document.querySelector("#menu");
    const navtext = document.querySelectorAll(".navtext");
    const openDrawer = document.querySelector("#openDrawer");
    const closeDrawer = document.querySelector("#closeDrawer");
    const navTag = document.querySelector(".tag");

    if (menu) {
      menu.addEventListener("click", () => {
        navtext.forEach((link) => {
          link.classList.toggle("show");
        });

        sidebar.classList.toggle("toggle");

        openDrawer.classList.toggle("hide");
        closeDrawer.classList.toggle("show");
        navTag.classList.toggle("show");
      });
    }
  }

  function setBgColor() {
    const backgroundColor = ["yellow", "green", "blue", "gray"];

    const statCard = document.querySelectorAll(".stat");

    for (let index = 0; index < statCard.length; index++) {
      statCard[index].style.backgroundColor = backgroundColor[index];
    }
  }

  setBgColor();

  initSidebar();
};

export default layout;
