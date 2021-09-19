// imports 
import FirstO1 from "../../../img/pon-balls/Small1.jpg";
import SecondO1 from "../../../img/pon-balls/Medium1.jpg";
import ThirdO1 from "../../../img/pon-balls/Large1.jpg";
import FirstO2 from "../../../img/pon-balls/Small2.jpg";
import SecondO2 from "../../../img/pon-balls/Medium2.jpg";
import ThirdO2 from "../../../img/pon-balls/Large2.jpg";
// end of imports
const PonponetjesCenterProducts = document.querySelector(".Ponponetje-center");
const OneColoredBtn = document.querySelector(".one-colored");
const TwoColoredBtn = document.querySelector(".two-colored");
const PonponetjesImages1 = [FirstO1, SecondO1, ThirdO1];
const PonponetjesImages2 = [FirstO2, SecondO2, ThirdO2];
const PonponetjesTexts1 = [
  `small: srd 10`, `medium: srd 12.50`, `large: srd 15.00`
];
const PonponetjesTexts2 = [
  `small: srd 12.50`, `medium: srd 15.00`, `large: srd 20.00`
];
const PonponetjesArr1 = [
  {
    img: PonponetjesImages1[0],
    text: PonponetjesTexts1[0],
  },
  {
    img: PonponetjesImages1[1],
    text: PonponetjesTexts1[1],
  },
  {
    img: PonponetjesImages1[2],
    text: PonponetjesTexts1[2],
  },
];
const PonponetjesArr2 = [
  {
    img: PonponetjesImages2[0],
    text: PonponetjesTexts2[0],
  },
  {
    img: PonponetjesImages2[1],
    text: PonponetjesTexts2[1],
  },
  {
    img: PonponetjesImages2[2],
    text: PonponetjesTexts2[2],
  },
];
window.addEventListener("DOMContentLoaded", () => {
  PonponetjesDisplay1(), Btns();
});
export function PonponetjesDisplay1() {
  const items = PonponetjesArr1.map(
    (item) =>
      `<div class="Ponponetjes-img-text">
    <div class="img-container img-container-Ponponetjes">
      <img src=${item.img} alt="" />
    </div>
    <p class="about-text text">
      ${item.text}
    </p>
  </div>`
  ).join("");
  PonponetjesCenterProducts.innerHTML = items;
}
export function PonponetjesDisplay2() {
  const items = PonponetjesArr2.map(
    (item) =>
      `<div class="Ponponetjes-img-text">
    <div class="img-container img-container-Ponponetjes">
      <img src=${item.img} alt="" />
    </div>
    <p class="about-text text">
      ${item.text}
    </p>
  </div>`
  ).join("");
  PonponetjesCenterProducts.innerHTML = items;
}
export function Btns() {
  OneColoredBtn.addEventListener("click", (e) => {
    return PonponetjesDisplay1();
  });
  TwoColoredBtn.addEventListener("click", (e) => {
    return PonponetjesDisplay2();
  });
}
