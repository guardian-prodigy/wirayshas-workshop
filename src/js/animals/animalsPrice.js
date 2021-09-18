const AnimalsCenter = document.querySelector(".prices-animals");
const AnimalPriceSocialIcons = `<ul class="prices-social-icons-zodiac">
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
const AnimalPrices = ["40.00", "50.00", "5.00"];
const AnimalTexts = [
  `een-kleurige beertjes:<br><span>Srd ${AnimalPrices[0]}</span>`,
  `twee-kleurige beertjes:<br><span>srd ${AnimalPrices[1]}</span>`,
  `per extra kleur <strong>(drie-kleurige, etc.)</strong>:
    <br><span>srd ${AnimalPrices[2]}</span>`,
  `uw kunt uw eigen kleuren en style uitkiezen!<br>${AnimalPriceSocialIcons}`,
];
const AnimalArr = [
  {
    text: AnimalTexts[0],
  },
  {
    text: AnimalTexts[1],
  },
  {
    text: AnimalTexts[2],
  },
  {
    text: AnimalTexts[3],
  },
];
function AnimalsDisplayPrices() {
  const animals = AnimalArr.map(
    (item) =>
      `<li class="animals-price">
    ${item.text}
  </li>`
  ).join('');
  AnimalsCenter.innerHTML = animals
}
AnimalsDisplayPrices()
