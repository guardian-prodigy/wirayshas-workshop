import Onecolored1 from "../../img/Bears/onecolored-1.jpg";
import Onecolored2 from "../../img/Bears/onecolored-2.jpg";
import Twocolored1 from "../../img/Bears/2colored-1.jpg";
import Twocolored2 from "../../img/Bears/2colored-2.jpg";
import Twocolored3 from "../../img/Bears/2colored-3.jpg";

const AnimalCenterProducts = document.querySelector(".animals-center");
const OneColoredBtn = document.querySelector(".one-colored");
const TwoColoredBtn = document.querySelector(".two-colored");
const AnimalImages1 = [Onecolored1, Onecolored2];
const AnimalImages2 = [Twocolored1, Twocolored2, Twocolored3];
const AnimalTexts1 = [`40 srd `];
const AnimalTexts2 = [`50 srd`];
const btns = ["Buy Now"];
const AnimalArr1 = [
  {
    img: AnimalImages1[0],
    text: AnimalTexts1[0],
    btn: btns[0],
  },
  {
    img: AnimalImages1[1],
    text: AnimalTexts1[0],
    btn: btns[0],
  },
  // {
  //   img: AnimalImages1[0],
  //   text: AnimalTexts1[0],
  // },
];
const AnimalArr2 = [
  {
    img: AnimalImages2[0],
    text: AnimalTexts2[0],
    btn: btns[0],
  },
  {
    img: AnimalImages2[1],
    text: AnimalTexts2[0],
    btn: btns[0],
  },
  {
    img: AnimalImages2[2],
    text: AnimalTexts2[0],
    btn: btns[0],
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
    <div class="purchase-price-btn">
    <p class="about-text text">
      ${item.text}
    </p>
    <a href="https://wa.me/+5978979639" class="purchase-btn-for-products">${item.btn}</a>
    </div>
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
    <div class="purchase-price-btn">
    <p class="about-text text">
      ${item.text}
    </p>
    <a href="https://wa.me/+5978979639" class="purchase-btn-for-products">${item.btn}</a>
    </div>
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
