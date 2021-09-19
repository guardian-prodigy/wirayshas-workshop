const LettersCenter = document.querySelector(".prices-headbands");
const Lettersprices = ["40.00", "50.00", "5.00"];
const LetterSocialIcons = `<ul class="prices-social-icons-zodiac">
<li><i class="fas hand-pointing-right fa-hand-point-right"></i></li>
<li>
  <a href="https://wa.me/+5978979639">
      <i class="fab fa-whatsapp price-icons-zodiac"></i>
  </a>
  <a href="https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f">
      <i class="fab fa-instagram price-icons-zodiac"></i>
  </a>
  </li>
</ul>`;
const LetterspriceText = [
  `one-colored headbands prices: <span>srd ${Lettersprices[0]}</span>`,
  `two-colored headbands prices: <span>srd ${Lettersprices[1]}</span>`,
  `more than two colors are possible for: <span>srd ${Lettersprices[2]}</span><br>${LetterSocialIcons}`,
];
const LetterspriceArr = [
  {
    text: LetterspriceText[0],
  },
  {
    text: LetterspriceText[1],
  },
  {
    text: LetterspriceText[2],
  },
];
export function DisplayLetterPrices() {
  let Prices = LetterspriceArr.map(
    (price) => `<li class="price-letters">${price.text}</li>`
  ).join("");
  LettersCenter.innerHTML = Prices;
}
DisplayLetterPrices();
