export function card(title, sub) {
  const ServWrapper = document.querySelector(".servs-wrapper");

  const ServCard = document.createElement("div");
  ServWrapper.appendChild(ServCard);

  const ServTitle = document.createElement("h3");
  const ServSub = document.createElement("p");

  ServCard.appendChild(ServTitle);
  ServCard.appendChild(ServSub);
  ServCard.classList.add("serv");
  ServTitle.classList.add("serv-title");
  ServSub.classList.add("subtitle");

  ServTitle.innerText = title;
  ServSub.innerText = sub;
}
