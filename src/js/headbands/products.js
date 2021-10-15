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
const HeadbandsTexts1 = [`40 srd`];
const HeadbandsTexts2 = [`50 srd`];
const purchaseBtns = ["Buy Now"];
const HeadbandsArr1 = [
  {
    img: HeadbandsImages1[0],
    text: HeadbandsTexts1[0],
    btn: purchaseBtns[0],
    btn: purchaseBtns[0],
  },
  {
    img: HeadbandsImages1[1],
    text: HeadbandsTexts1[0],
    btn: purchaseBtns[0],
    btn: purchaseBtns[0],
  },
  {
    img: HeadbandsImages1[2],
    text: HeadbandsTexts1[0],
    btn: purchaseBtns[0],
    btn: purchaseBtns[0],
  },
];
const HeadbandsArr2 = [
  {
    img: HeadbandsImages2[0],
    text: HeadbandsTexts2[0],
    btn: purchaseBtns[0],
    btn: purchaseBtns[0],
  },
  {
    img: HeadbandsImages2[1],
    text: HeadbandsTexts2[0],
    btn: purchaseBtns[0],
    btn: purchaseBtns[0],
  },
  {
    img: HeadbandsImages2[2],
    text: HeadbandsTexts2[0],
    btn: purchaseBtns[0],
    btn: purchaseBtns[0],
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
    <div>
    <div class="purchase-price-btn">
    <p class="about-text text">
      ${item.text}
    </p>
    <a href="https://wa.me/+5978979639" class="purchase-btn-for-products">${item.btn}</a>
    </div>
    </div>
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
    <div class="purchase-price-btn">
    <p class="about-text text">
      ${item.text}
    </p>
    <a href="https://wa.me/+5978979639" class="purchase-btn-for-products">${item.btn}</a>
    </div>
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
