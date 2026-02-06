import { Task } from "./addtask.js";
import { modal } from "./modal.js";
import { render } from "./render.js";
import { GetTask } from "./storage.js";
import { submit } from "./submit.js";

document.addEventListener("DOMContentLoaded", () => {
  modal();
  submit();
  render();
 console.log(GetTask())
  

});
