const Errcontainer = document.querySelector(".err-container");

async function Get(params) {
  try {
    const res = await fetch("https://dummyjson.com/users");

    if (!res.ok) {
      ErrMsg("Somthing Wrong", Errcontainer);
      setInterval(() => {
        Errcontainer.innerHTML = "";
      }, 3000);
      return;
    }

    const users = await res.json();

    rennderUser(users.users);
    console.log(users.users);
  } catch (error) {
    ErrMsg(error, Errcontainer);
    setInterval(() => {
      Errcontainer.innerHTML = "";
    }, 3000);
  }
}

async function Post(Email, Password) {
  try {
    const res = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: Email,
        password: Password,
        expireInMins: 30,
      }),
    });

    
    if (!res.ok) {
      if (!res.ok) {
        ErrMsg("User not Exist", validationMsg);

        setInterval(() => {
          Errcontainer.innerHTML = "";
        }, 3000);
      }
    } else {
      ErrMsg("succesfully Login", validationMsg);

      setInterval(() => {
        Errcontainer.innerHTML = " ";
      }, 3000);

 
    }
  } catch (error) {
    ErrMsg(error, Errcontainer);
    setInterval(() => {
      Errcontainer.innerHTML = "";
    }, 3000);
  }
}

Get();

function ErrMsg(label, container) {
  container.innerHTML = `
    
     <div class="err-msg">

        <p>${label}</p>
    </div>`;
}

const tableBody = document.querySelector("#tbody");
const validationMsg = document.querySelector(".validation-msg");

function rennderUser(users) {
  tableBody.innerHTML = "";

  users.map(
    (user) =>
      (tableBody.innerHTML += `
          
            <tr>
                    <td>${user.id}</td>
                      <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                          <td>${user.maidenName}</td>
                     <td>${user.age}</td>
                       <td>${user.gender}</td>
                         <td>${user.email}</td>
                   
                </tr>`),
  );
}

validation();

function validation() {
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#Email").value.trim();
    const password = document.querySelector("#Password").value.trim();

    if (email === "" || password === "") {
      console.log("empty");

      ErrMsg("Please fill the input fields", validationMsg);
      setInterval(() => {
        validationMsg.innerHTML = "";
      }, 3000);
    } else {
      Post(email, password);
    }
  });
}
