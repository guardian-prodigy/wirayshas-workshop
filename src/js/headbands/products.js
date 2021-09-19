import FirstO1 from "../../../img/headbands/1colored-1.jpg";
import SecondO1 from "../../../img/headbands/1colored-2.jpg";
import ThirdO1 from "../../../img/headbands/1colored-3.jpg";
import FirstO2 from "../../../img/headbands/2colored-1.jpg";
import SecondO2 from "../../../img/headbands/2colored-2.jpg";
import ThirdO2 from "../../../img/headbands/2colored-3.jpg";
const headbandsCenterProducts = document.querySelector(".headbands-center");
const OneColoredBtn = document.querySelector(".one-colored");
const TwoColoredBtn = document.querySelector(".two-colored");
const HeadbandsImages1 = [FirstO1, SecondO1, ThirdO1];
const HeadbandsImages2 = [FirstO2, SecondO2, ThirdO2];
const HeadbandsTexts1 = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing facere,
    inventore atque, neque dolorem?`,
];
const HeadbandsTexts2 = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing facere,
    inventore atque, neque dolorem?`,
];
const HeadbandsArr1 = [
  {
    img: HeadbandsImages1[0],
    text: HeadbandsTexts1[0],
  },
  {
    img: HeadbandsImages1[1],
    text: HeadbandsTexts1[0],
  },
  {
    img: HeadbandsImages1[2],
    text: HeadbandsTexts1[0],
  },
];
const HeadbandsArr2 = [
  {
    img: HeadbandsImages2[0],
    text: HeadbandsTexts2[0],
  },
  {
    img: HeadbandsImages2[1],
    text: HeadbandsTexts2[0],
  },
  {
    img: HeadbandsImages2[2],
    text: HeadbandsTexts2[0],
  },
];
window.addEventListener("DOMContentLoaded", () => {
  headbandsDisplay1(), Btns();
});
export function headbandsDisplay1() {
  const items = HeadbandsArr1.map(
    (item) =>
      `<div class="headbands-img-text">
    <div class="img-container img-container-headbands">
      <img src=${item.img} alt="" />
    </div>
    <p class="text">
      ${item.text}
    </p>
  </div>`
  ).join("");
  headbandsCenterProducts.innerHTML = items;
}
export function headbandsDisplay2() {
  const items = HeadbandsArr2.map(
    (item) =>
      `<div class="headbands-img-text">
    <div class="img-container img-container-headbands">
      <img src=${item.img} alt="" />
    </div>
    <p class="text">
      ${item.text}
    </p>
  </div>`
  ).join("");
  headbandsCenterProducts.innerHTML = items;
}
export function Btns() {
  OneColoredBtn.addEventListener("click", (e) => {
    return headbandsDisplay1();
  });
  TwoColoredBtn.addEventListener("click", (e) => {
    return headbandsDisplay2();
  });
}
