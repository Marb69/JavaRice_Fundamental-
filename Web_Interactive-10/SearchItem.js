const array = ["APPLE", "Manga", "You", "Mango", "Hayop", "ka"];

const ul = document.querySelector("ul");
const input = document.querySelector("input");

input.addEventListener("input", () => {
  let inputValue = input.value;
  ul.innerHTML = "";

  let filtered =
    array.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase()),
    ) || [];

  filtered.forEach((item) => {
    const li = document.createElement("li");
    ul.append(li);
    li.innerText = item;
  });

  if (filtered.length == 0) {
    return ul.append(
      (document.createElement('span').innerTEx = "No Data Found!"),
    );
  }
});

function render() {
  if (ul.innerHTML == 0) {
    array.forEach((item) => {
      const li = document.createElement("li");
      ul.append(li);
      li.innerText = item;
    });

    return;
  }
}

render();
