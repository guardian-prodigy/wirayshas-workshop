import PonPon from "../../img/imagesForProductsMain/ponpons.jpg";
import Headbands from "../../img/imagesForProductsMain/headbands.jpg";
import Animals from "../../img/imagesForProductsMain/animals.jpg";
import Letters from "../../img/imagesForProductsMain/letters.jpg";
import ZodiacSigns from "../../img/imagesForProductsMain/zodiac.jpg";
// arrays
const links = [
  "ponponetjes.html",
  "headbands.html",
  "animals.html",
  "letters.html",
  "zodiac.html",
];
const titles = [
  "ponponnetjes",
  "headbands",
  "pon animals",
  "letters",
  "zodiac signs",
];
const titlesExternalLinks = ["home", "about", "products", "contact"];
const titlesExternalLinksHref = [
  "index.html",
  "#about",
  "#products",
  "#contact",
];
const faders = ["fade-left", "fade-right"];
const images = [PonPon, Headbands, Animals, Letters, ZodiacSigns];
const texts = [
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer!<br>druk <span><a href=${links[0]}>hier</a></span> om meer ponponetjes te bekijken :)`,
  `headbands kunt uw gebruiken om uw hoofd een nieuwe look te geven! P.S. ze zijn heel handig voor feestjes 
  <br>druk <span><a href=${links[1]}>hier</a></span> om meer dieren te bekijken`,
  `animals kunt uw gebruiken als decoratie voor uw tassen, lamp, kast, en nog veel meer!<br>druk <span><a href=${links[2]}>hier</a></span> om meer animals te bekijken :)`,
  `letters kunt uw gebruiken om uw tas, lamp, en andere dingen te verzieren! uw kunt ze ook gebruiken om aan uw partner te geven;) <br>druk <span><a href=${links[3]}>hier</a></span> om meer letters te bekijken :)`,
  `ponponetjes kunt uw gebruiken als decoratie voor uw hand-tas, lamp, kast, en nog veel meer! druk <span><a href=${links[4]}>hier</a></span> om meer ponponetjes te zien :)`,
];
const products = [
  {
    id: 1,
    title: titles[0],
    img: images[0],
    text: texts[0],
    link: links[0],
    class: faders[0],
  },
  {
    id: 1,
    title: titles[1],
    img: images[1],
    text: texts[1],
    link: links[1],
    class: faders[1],
  },
  {
    id: 1,
    title: titles[2],
    img: images[2],
    text: texts[2],
    link: links[2],
    class: faders[0],
  },
  {
    id: 1,
    title: titles[3],
    img: images[3],
    text: texts[3],
    link: links[3],
    class: faders[1],
  },

  // {
  //   id: 1,
  //   title: titles[4],
  //   img: images[4],
  //   text: texts[4],
  //   link: links[4],
  //   class: faders[0]
  // },
];
const AllExternalLinks = [
  {
    id: 1,
    linkNumber: titlesExternalLinksHref[0],
    titleNumber: titlesExternalLinks[0],
  },
  {
    id: 2,
    linkNumber: titlesExternalLinksHref[1],
    titleNumber: titlesExternalLinks[1],
  },
  {
    id: 3,
    linkNumber: titlesExternalLinksHref[2],
    titleNumber: titlesExternalLinks[2],
  },
  {
    id: 4,
    linkNumber: titlesExternalLinksHref[3],
    titleNumber: titlesExternalLinks[3],
  },
];
const AboutTextArr = [
  {
    title: titles[0],
    link: links[0],
  },
  {
    title: titles[1],
    link: links[1],
  },
  {
    title: titles[2],
    link: links[2],
  },
  {
    title: titles[3],
    link: links[3],
  },
  {
    title: titles[4],
    link: links[4],
    conj: "en",
    comma: "",
    endConj: ".",
  },
];
// end of arrays

// variables
const productArticle = document.querySelector(".article");
const sidebarBtns = document.querySelector(".sidebar-btns");
const sidebar = document.querySelector(".sidebar");
const aboutText = document.querySelector(".about-text");
// end of variables

// addEventListers
window.addEventListener("DOMContentLoaded", () => Products());
// end of addEventListeners

// functions

function BtnDisplay() {
  const items = AllExternalLinks.map(
    (item) =>
      `<a class="btn-sidebar" href=${item.linkNumber}>${item.titleNumber}</a>`
  ).join("");
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
      (item) => `<div class="article-added" data-aos=${item.class}>
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

function AboutText() {
  let text = `<p class="about-text-paragraph">
  ik maak hele leuke en schattige producten zoals <span>${CreateAboutText()}</span>
  voor een paar simpele voorbeelden, druk <a href="#products">hier</a>
</p>`;
  aboutText.innerHTML = text;
}
AboutText();

function CreateAboutText() {
  let span = AboutTextArr.map((item) => {
    return `<span class="about-text-link"
    ><span class="about-text-paragraph">${item.conj || ""}</span> <a href="${
      item.link
    }"> ${item.title}</a></span
  >${item.comma == "" ? "" : ","}${item.endConj || ""}`;
  }).join("");
  return span;
}
// end of functions
