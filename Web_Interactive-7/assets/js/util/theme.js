export function theme() {
  const ImagesPath = {
    FirstImage: "Assets/image/hero1.jpg",
    SeconImage: "Assets/image/hero2.png",
  };

  const ImgList = [];

  const ClickThisBtn = document.querySelector("#click-this");
  const ChangeThemeBtn = document.querySelector("#change-theme");
  const ImageWrapper = document.querySelector(".image");

  const ElemImg1 = document.createElement("img");
  const ElemImg2 = document.createElement("img");

  ImageWrapper.appendChild(ElemImg1);
  ImageWrapper.appendChild(ElemImg2);

  ElemImg1.src = ImagesPath.FirstImage;
  ElemImg2.src = ImagesPath.SeconImage;

  ImgList.push(ElemImg1, ElemImg2);
  ElemImg1.classList.add("render");

  ImgList.forEach((img) => {
    img.classList.add("img");
  });

  ClickThisBtn.addEventListener("click", () => {
    ImgList.forEach((img) => {
      if (img.classList.contains("render")) {
        img.classList.remove("render");
      } else {
        img.classList.add("render");
      }
    });
  });

  const TextChange = document.querySelector(".text-change");
}
