import aquarius from '../../img/zodiac-pics/images.jpg';
import '../globalJs/sidebar-subpage';
const zodiacNames = [
  "aquarius",
  "pisces",
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "scorpio",
  "virgo",
  "libra",
  "sagittarius ",
  "capricorn",
];
const prices = [50];
const ZodiacImages = [aquarius];
const ZodiacText = [
  "Aquarius energy helps us innovate and unite for social justice",
];
const zodiacs = [
  {
    title: zodiacNames[0],
    category: zodiacNames[0],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[1],
    category: zodiacNames[1],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[2],
    category: zodiacNames[2],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[3],
    category: zodiacNames[3],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[4],
    category: zodiacNames[4],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[5],
    category: zodiacNames[5],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[6],
    category: zodiacNames[6],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[7],
    category: zodiacNames[7],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[8],
    category: zodiacNames[8],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[9],
    category: zodiacNames[9],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[10],
    category: zodiacNames[10],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
  {
    title: zodiacNames[11],
    category: zodiacNames[11],
    img: ZodiacImages[0],
    price: prices[0],
    text: ZodiacText[0],
  },
];
const mainSection = document.querySelector(".main-center-subpage");

// event listeners
window.addEventListener(
  "DOMContentLoaded",
  () => zodiacDisplay(zodiacs)
);
// functions
function zodiacDisplay(par) {
  const items = par
    .map(
      (item) =>
        `<article class="article">
        <div class="header">
          <h4 class="logo">${item.title}</h4>
          <div class="underline"></div>
        </div>
        <div class="img-container">
          <img src=${item.img} alt="" />
        </div>
        <div class="price">
          <div>
            <p>${item.price}Srd</p>
            <a href="aquarius.html"><i class="fas fa-info"></i></a>
          </div>
          <div class="underline"></div>
        </div>
        <p class="text">
          ${item.text}
        </p>
      </article>`
    )
    .join("");
  mainSection.innerHTML = items;
}