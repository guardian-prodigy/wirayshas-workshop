
// zodiac prices
const ZodiacCenter = document.querySelector(".prices-zodiac");
const ZodiacPriceSocial = ` <ul class="prices-social-icons-zodiac">
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
const ZodiacPrices = ["50.00", "52.50", "60.00", "70.00"];
const ZodiacTexts = [
  `doorzichtige zodiac sign:<br><span>srd ${ZodiacPrices[0]}</span>`,
  `zodiac sign met glitter:<br><span>srd ${ZodiacPrices[1]}</span>`,
  `zodiac sign met steentjes:<br><span>srd ${ZodiacPrices[2]}</span>`,
  `zodiac sign met foil:<br><span>srd ${ZodiacPrices[3]}</span>`,
  `combinations of more than one accesory is possible<br>${ZodiacPriceSocial}`,
];
const ZodiacArr = [
  {
    text: ZodiacTexts[0],
  },
  {
    text: ZodiacTexts[1],
  },
  {
    text: ZodiacTexts[2],
  },
  {
    text: ZodiacTexts[3],
  },
  {
    text: ZodiacTexts[4],
  },
];
export function ZodiacDisplayPrices() {
  const PriceItems = ZodiacArr.map(
    (item) => `<li class="price-zodiac">${item.text}</li>`
  ).join("");
  ZodiacCenter.innerHTML = PriceItems;
}
ZodiacDisplayPrices();
// end of zodiac prices
