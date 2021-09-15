import PonPon from "../../img/imagesForProductsMain/ponpons.jpg";
import Headbands from "../img/imagesForProductsMain/headbands.jpg";
import Animals from "../img/imagesForProductsMain/letters.jpg";
import Letters from "../img/imagesForProductsMain/animals.jpg";
import ZodiacSigns from "../img/imagesForProductsMain/zodiac.jpg";

// arrays
const links = [
  "ponponetjes.html",
  "headbands.html",
  "animals.html",
  "letters.html",
  "zodiac.html",
];
const titles = [
  "ponponetjes",
  "headbands",
  "animals",
  "letters",
  "zodiac signs",
];
const images = [PonPon, Headbands, Animals, Letters, ZodiacSigns];
const texts = [
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=${links[0]}>hier</a></span> om meer ponponetjes te zien :)`,
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=${links[1]}>hier</a></span> om meer ponponetjes te zien :)`,
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=${links[2]}>hier</a></span> om meer ponponetjes te zien :)`,
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=${links[3]}>hier</a></span> om meer ponponetjes te zien :)`,
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=${links[4]}>hier</a></span> om meer ponponetjes te zien :)`,
];
const products = [
  {
    id: 1,
    title: titles[0],
    img: images[0],
    text: texts[0],
    link: links[0]
  },
  {
    id: 1,
    title: titles[1],
    img: images[1],
    text: texts[1],
    link: links[1],
  },
  {
    id: 1,
    title: titles[2],
    img: images[2],
    text: texts[2],
    link: links[2],
  },
  {
    id: 1,
    title: titles[3],
    img: images[3],
    text: texts[3],
    link: links[3],
  },
  {
    id: 1,
    title: titles[4],
    img: images[4],
    text: texts[4],
    link: links[4],
  },
];
const AllExternalLinks = [
  {
    id: 1,
    linkNumber: links[0],
    titleNumber: titles[0],
  },
  {
    id: 2,
    linkNumber: links[1],
    titleNumber: titles[1],
  },
  {
    id: 3,
    linkNumber: links[2],
    titleNumber: titles[2],
  },
  {
    id: 4,
    linkNumber: links[3],
    titleNumber: titles[3],
  },
  {
    id: 5,
    linkNumber: links[4],
    titleNumber: titles[4],
  },
];
// end of arrays

// variables
const sectionCenter = document.querySelector(".section-center");
const productArticle = document.querySelector(".article");
const btns = document.querySelectorAll(".fas-js");
const sidebar = document.querySelector(".sidebar");
const sidebarBtns = document.querySelector(".sidebar-btns");
const sidebarHeader = document.querySelector(".sec-center");
// end of variables

// addEventListers
window.addEventListener("DOMContentLoaded", () => Products());
// end of addEventListeners

// functions
function sidebartoggle() {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("fa-bars")) {
        sidebar.classList.toggle("show-sidebar");
        sidebarHeader.style.visibility = "hidden";
      } else if (e.currentTarget.classList.contains("fa-times")) {
        sidebar.classList.remove("show-sidebar");
        sidebarHeader.style.visibility = "visible";
      }
    });
  });
}
sidebartoggle();
function BtnDisplay() {
  const items = AllExternalLinks.map(
    (item) =>
      `<li class="btn-sidebar"><a href=${item.linkNumber}>${item.titleNumber}</a></li>`
  ).join("");
  console.log(items);
  sidebarBtns.innerHTML = items;
  const sidebarBtn = document.querySelectorAll(".btn-sidebar");
  sidebarBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target;
      if (target) {
        sidebar.classList.remove("show-sidebar");
      }
    });
  });
}
BtnDisplay();
function Products() {
  let product = products
    .map(
      (item) => `<div class="article-added">
      <div class="article-header">
        <h3>${item.title}</h3>
      </div>
      <div class="img-container">
        <img src=${item.img} />
        <i class="fas fa-home fa-home-img-product"></i>
      </div>
      <div class="article-info">
        <p>${item.text}</p>
      </div>
    </div>`
    )
    .join("");
  productArticle.innerHTML = product;
}
// end of functions
