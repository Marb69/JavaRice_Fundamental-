export function NavToggle() {
  const MenuBtn = document.querySelector("#menu-icon");
  const AnimateBar = document.querySelectorAll(".bar");
  const Nav = document.querySelector(".nav");

  MenuBtn.addEventListener("click", () => {
    Nav.classList.toggle("nav-toggle");

    AnimateBar.forEach((bar) => {
      bar.classList.toggle("toggle-menu");
    });
  });
}
