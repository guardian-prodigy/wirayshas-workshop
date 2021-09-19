const PonPonetjesCenter = document.querySelector(".prices-Ponponetjes");
const PonPonetjesprices = ['10.00, 12.50, 15.00','12.50, 15.00, 17.50', '2.50'];
const PonPonetjesocialIcons = `<ul class="prices-social-icons-zodiac">
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
const PonPonetjespriceText = [
  `one colored ponpon:<br><span>srd: ${PonPonetjesprices[0]}`,
  `two colored ponpon:<br><span>srd: ${PonPonetjesprices[1]}`,
  `per extra color: <span>srd ${PonPonetjesprices[2]}</span>`,
  `<strong>the prijzen zijn gelijst in volg orde van small, medium, en large!</strong><br>${PonPonetjesocialIcons}`,
];
const PonPonetjespriceArr = [
  {
    text: PonPonetjespriceText[0],
  },
  {
    text: PonPonetjespriceText[1],
  },
  {
    text: PonPonetjespriceText[2],
  },
  {
    text: PonPonetjespriceText[3],
  },
];
export function DisplayPonponetjesPrices() {
  let Prices = PonPonetjespriceArr.map(
    (price) => `<li class="price-PonPonetjes">${price.text}</li>`
  ).join("");
  PonPonetjesCenter.innerHTML = Prices;
}
DisplayPonponetjesPrices();