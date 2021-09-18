import E from "../../img/letters/E.jpg";
import F from "../../img/letters/F.jpg";
import G from "../../img/letters/G.jpg";
import H from "../../img/letters/H.jpg";
import I from "../../img/letters/I.jpg";
import J from "../../img/letters/J.jpg";
import K from "../../img/letters/K.jpg";
import L from "../../img/letters/L.jpg";
import M from "../../img/letters/M.jpg";
import N from "../../img/letters/N.jpg";
import O from "../../img/letters/O.jpg";
import P from "../../img/letters/P.jpg";
import Q from "../../img/letters/Q.jpg";
import R from "../../img/letters/R.jpg";
import S from "../../img/letters/S.jpg";
import T from "../../img/letters/T.jpg";
import U from "../../img/letters/U.jpg";
import V from "../../img/letters/V.jpg";
import W from "../../img/letters/W.jpg";
import X from "../../img/letters/X.jpg";
import Y from "../../img/letters/Y.jpg";
import Z from "../../img/letters/Z.jpg";
import FirstName from "../../img/letters/1st-name-letter.jpeg";
import SecondName from "../../img/letters/2nd-name-letter.jpeg";
import ThirdName from "../../img/letters/3rd-name-letter.jpg";
import FourthName from "../../img/letters/4th-name-letter.jpg";
import FifthName from "../../img/letters/5th-name-letter.jpg";
import SixthName from "../../img/letters/6th-name-letter.jpg";
import SeventhName from "../../img/letters/7th-name-letter.jpg";
import EightName from "../../img/letters/8th-name-letter.jpg";
import "../globalJs/sidebar-subpage";
import './letterPrice';
const imagesArr = [
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  X,
  Y,
  W,
  Z,
];
const nameArr = [
  FirstName,
  SecondName,
  ThirdName,
  FourthName,
  FifthName,
  SixthName,
  SeventhName,
  EightName,
];
const LeftArrow = document.querySelector(".fa-angle-left");
const RightArrow = document.querySelector(".fa-angle-right");
const NamesArrowsRight = document.querySelector(".name-right");
const NamesArrowsLeft = document.querySelector(".name-left");
const imageNames = document.querySelector(".img-for-names");
let img = document.querySelector(".img-for-E-D");

// functions
function ArrowsLetters() {
  let counter = 0;
  RightArrow.addEventListener("click", (e) => {
    counter++;
    img.setAttribute("src", imagesArr[counter]);
    console.log(counter);
    if (counter > imagesArr.length - 1) {
      counter = 0;
      img.setAttribute("src", imagesArr[counter]);
    }
    return counter;
  });
  LeftArrow.addEventListener("click", (e) => {
    counter--;
    if (counter < 0) {
      counter = imagesArr.length - 1;
      img.setAttribute("src", imagesArr[counter]);
    }
    img.setAttribute("src", imagesArr[counter]);

    console.log(counter);
    return counter;
  });
}
ArrowsLetters();
function ArrowsNames() {
  let counter = 0;
  imageNames.setAttribute("src", nameArr[counter]);

  NamesArrowsRight.addEventListener("click", (e) => {
    counter++;
    imageNames.setAttribute("src", nameArr[counter]);
    console.log(counter);
    if (counter > nameArr.length - 1) {
      counter = 0;
      imageNames.setAttribute("src", nameArr[counter]);
    }
    return counter;
  });
  NamesArrowsLeft.addEventListener("click", (e) => {
    counter--;
    imageNames.setAttribute("src", nameArr[counter]);
    console.log(counter);
    if (counter < 0) {
      counter = nameArr.length - 1;
    imageNames.setAttribute("src", nameArr[counter]);

    }
    return counter;
  });
}
ArrowsNames();
