import { addProduct } from "./addProduct.js";
import { api } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  api();
  addProduct();
});
