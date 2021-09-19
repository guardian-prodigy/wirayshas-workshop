import O1 from "../../../img/zodiac-pics/images.jpg";
import O2 from "../../../img/zodiac-pics/person-1.jpeg";
const AnimalCenterProducts = document.querySelector(".animals-center");
const OneColoredBtn = document.querySelector(".one-colored");
const TwoColoredBtn = document.querySelector(".two-colored");
const AnimalImages1 = [O1];
const AnimalImages2 = [O2];
const AnimalTexts1 = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing facere,
    inventore atque, neque dolorem?`,
];
const AnimalTexts2 = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing facere,
    inventore atque, neque dolorem?`,
];
const AnimalArr1 = [
  {
    img: AnimalImages1[0],
    text: AnimalTexts1[0],
  },
  {
    img: AnimalImages1[0],
    text: AnimalTexts1[0],
  },
  {
    img: AnimalImages1[0],
    text: AnimalTexts1[0],
  },
];
const AnimalArr2 = [
  {
    img: AnimalImages2[0],
    text: AnimalTexts2[0],
  },
  {
    img: AnimalImages2[0],
    text: AnimalTexts2[0],
  },
  {
    img: AnimalImages2[0],
    text: AnimalTexts2[0],
  },
];
window.addEventListener("DOMContentLoaded", () => {
  AnimalsDisplay1(), Btns();
});
export function AnimalsDisplay1() {
  const items = AnimalArr1.map(
    (item) =>
      `<div class="animal-img-text">
    <div class="img-container img-container-animal">
      <img src=${item.img} alt="" />
    </div>
    <p class="text">
      ${item.text}
    </p>
  </div>`
  ).join("");
  AnimalCenterProducts.innerHTML = items;
}
export function AnimalsDisplay2() {
  const items = AnimalArr2.map(
    (item) =>
      `<div class="animal-img-text">
    <div class="img-container img-container-animal">
      <img src=${item.img} alt="" />
    </div>
    <p class="text">
      ${item.text}
    </p>
  </div>`
  ).join("");
  AnimalCenterProducts.innerHTML = items;
}
export function Btns() {
  OneColoredBtn.addEventListener("click", (e) => {
    return AnimalsDisplay1();
  });
  TwoColoredBtn.addEventListener("click", (e) => {
    return AnimalsDisplay2();
  });
}
