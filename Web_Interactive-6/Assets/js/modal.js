import { dashboard } from "./dashboard.js";

export function Modal() {
  const Modal = document.querySelector(".modal");
  const SubmitBtn = document.querySelector('.submit-btn');
  const AddBtn = document.querySelector(".add-product-btn");
  const ExitBtn = document.querySelector(".exit-modal");

  AddBtn.addEventListener("click", () => {
    Modal.classList.add("open-modal");
  });

  ExitBtn.addEventListener("click", () => {
    Modal.classList.remove("open-modal");
  });




  function Addproduct() {
    const pname = document.querySelector("#pname");
    const price = document.querySelector("#price");
    const stock = document.querySelector("#stock");

    if (pname.value!=="" && price.value!=="" && stock.value!=="" ){

         dashboard(pname.value,price.value,stock.value);

          
    }else{

        alert('Please fill the blank');
    }
  }


  SubmitBtn.addEventListener('click',Addproduct)
}
