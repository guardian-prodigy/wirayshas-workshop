const LettersCenter = document.querySelector(".prices-letters");
const Lettersprices = ["35.00", "37.50", "40.00", "45.00", "50.00"];
const LetterspriceText = [
  `letter met glitter:<br><span>Srd ${Lettersprices[0]}</span>`,
  `letter met bloemen:<br><span>Srd ${Lettersprices[1]}</span>`,
  `letter met schelpen:<br><span>Srd ${Lettersprices[2]}</span>`,
  `letter met steentjes:<br><span>Srd ${Lettersprices[3]}</span>`,
  `letter met zilvere of goudkleurige foil:<br><span>Srd ${Lettersprices[4]}</span>`,
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
];
export function DisplayLetterPrices() {
  let Prices = LetterspriceArr.map(
    (price) => `<li class="price-letters">${price.text}</li>`
  ).join("");
  LettersCenter.innerHTML = Prices;
}
DisplayLetterPrices();