import layout from "./layout.js";
import Route from "./router.js";

window.addEventListener("hashchange",Route)
window.addEventListener("load",Route)

layout();