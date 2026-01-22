import { StyleLoader } from "./util/style.js";
import { NavToggle } from "./util/nav.js";
import { theme } from "./util/theme.js";

document.addEventListener("DOMContentLoaded", () => {


    
  StyleLoader();
  NavToggle();
  theme();
});
