const LettersCenter = document.querySelector(".prices-letters");
const Lettersprices = ["35.00", "37.50", "40.00", "45.00", "50.00", '5.00'];
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
  `letter met glitter:<br><span>Srd ${Lettersprices[0]}</span>`,
  `letter met bloemen:<br><span>Srd ${Lettersprices[1]}</span>`,
  `letter met schelpen:<br><span>Srd ${Lettersprices[2]}</span>`,
  `letter met steentjes:<br><span>Srd ${Lettersprices[3]}</span>`,
  `letter met zilvere of goudkleurige foil:<br><span>Srd ${Lettersprices[4]}</span>`,
  `per extra accessory: <span>${Lettersprices[4]}</span><br>${LetterSocialIcons}`
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
  {
    text: LetterspriceText[3],
  },
  {
    text: LetterspriceText[4],
  },
  {
    text: LetterspriceText[5],
  },
];
export function DisplayLetterPrices() {
  let Prices = LetterspriceArr.map(
    (price) => `<li class="price-letters">${price.text}</li>`
  ).join("");
  LettersCenter.innerHTML = Prices;
}
DisplayLetterPrices();