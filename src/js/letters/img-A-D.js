import A from "../../../img/letters/A.jpg";
import B from "../../../img/letters/B.jpeg";
import C from "../../../img/letters/C.jpeg";
import D from "../../../img/letters/D.jpeg";
const ImgContainer_A_D = document.querySelector(".letters-A-D");
const imagesA_D = [A, B, C, D];
const prices = ["50.00"];
const hrefs = ["https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f"];
const ImageA_D_Arr = [
    {
        img: imagesA_D[0],
        price: prices[0],
        href: hrefs[0],
    },
    {
        img: imagesA_D[1],
        price: prices[0],
        href: hrefs[0],
    },
    {
        img: imagesA_D[2],
        price: prices[0],
        href: hrefs[0],
    },
    {
        img: imagesA_D[3],
        price: prices[0],
        href: hrefs[0],
    },
]
function LettersDisplayA_D() {
    const Letters = ImageA_D_Arr.map((item) => 
    `<li class="static-letters">
    <div class="img-container-letter">
      <img src=${item.img} />
    </div>
    <div class="price-info">
      <p style="border: none" class="price-letters header-price">
        <span>${item.price}</span>
      </p>
      <a
        href="${item.href}"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>
  </li>`
    ).join('');
    ImgContainer_A_D.innerHTML = Letters;
}
LettersDisplayA_D();