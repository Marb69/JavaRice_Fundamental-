let Fname = document.querySelector("#firstname");
let Lname = document.querySelector("#lastname");
let Email = document.querySelector("#email");
const SubmitBtn = document.querySelector("#submit-btn");
const Count = document.querySelector(".count");

let ListPerson = [];

function CredInterface() {
  let ListObj = {
    firstname: Fname.value,
    lastname: Lname.value,
    email: Email.value,
  };

  ListPerson.push(ListObj);
  ListRender();
}

function SubmitCred() {
  Validate();
}

function Validate() {
  if (Fname !== "" && Lname !== "" && Email !== "") {
    CredInterface();
    CountList();
  } else {
    alert("Please fill the Field");
   
  }
}

function CountList() {
  let CountList = ListPerson.length;

  Count.innerHTML = CountList;
}

SubmitBtn.addEventListener("click", SubmitCred);





function ListRender(){

    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');
    const fname = document.createElement('td');
    const lname = document.createElement('td');
    const email = document.createElement('td');

console.log(ListPerson)

   ListPerson.forEach(person=>{

        tbody.appendChild(row);
            row.appendChild(fname);
            row.appendChild(lname);
            row.appendChild(email);
           
            fname.innerHTML = person.firstname;
            lname.innerHTML = person.lastname;
            email.innerHTML = person.email;


   })


}