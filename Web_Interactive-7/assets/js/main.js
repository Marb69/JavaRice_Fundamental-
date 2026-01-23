import { StyleLoader } from "./util/style.js";
import { NavToggle } from "./util/nav.js";
import { theme } from "./util/theme.js";
import { dashboardService } from "./dashboard/dashboardService.js";

document.addEventListener("DOMContentLoaded", () => {
  StyleLoader();
  NavToggle();
  theme();
  dashboardService();
});
