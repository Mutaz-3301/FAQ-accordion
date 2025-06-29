let imgMOne = document.getElementById("icon-m-one");
let imgPOne = document.getElementById("icon-p-one");
let paraOne = document.getElementById("para-1");

let imgMTwo = document.getElementById("icon-m-two");
let imgPTwo = document.getElementById("icon-p-two");
let paraTwo = document.getElementById("para-2");

let imgMThree = document.getElementById("icon-m-three");
let imgPThree = document.getElementById("icon-p-three");
let paraThree = document.getElementById("para-3");

let imgMFour = document.getElementById("icon-m-four");
let imgPFour = document.getElementById("icon-p-four");
let paraFour = document.getElementById("para-4");

function accordionOne() {
  paraOne.style.display = "none";
  imgPOne.onclick = function () {
    imgPOne.style.display = "none";
    paraOne.style.display = "block";
    imgMOne.style.backgroundColor = "white";
  };

  imgMOne.onclick = function () {
    imgMOne.style.display = "none";
    imgPOne.style.display = "block";
    paraOne.style.display = "none";
    imgPOne.style.display = "block";
    imgMOne.style.display = "block";
  };
}

function accordionTwo() {
  paraTwo.style.display = "none";
  imgPTwo.onclick = function () {
    imgPTwo.style.display = "none";
    paraTwo.style.display = "block";
    imgMTwo.style.backgroundColor = "white";
  };

  imgMTwo.onclick = function () {
    imgMTwo.style.display = "none";
    imgPTwo.style.display = "block";
    paraTwo.style.display = "none";
    imgPTwo.style.display = "block";
    imgMTwo.style.display = "block";
  };
}

function accordionThree() {
  paraThree.style.display = "none";
  imgPThree.onclick = function () {
    imgPThree.style.display = "none";
    paraThree.style.display = "block";
    imgMThree.style.backgroundColor = "white";
  };

  imgMThree.onclick = function () {
    imgMThree.style.display = "none";
    imgPThree.style.display = "block";
    paraThree.style.display = "none";
    imgPThree.style.display = "block";
    imgMThree.style.display = "block";
  };
}

function accordionFour() {
  paraFour.style.display = "none";
  imgPFour.onclick = function () {
    imgPFour.style.display = "none";
    paraFour.style.display = "block";
    imgMFour.style.backgroundColor = "white";
  };

  imgMFour.onclick = function () {
    imgMFour.style.display = "none";
    imgPFour.style.display = "block";
    paraFour.style.display = "none";
    imgPFour.style.display = "block";
    imgMFour.style.display = "block";
  };
}

accordionOne();
accordionTwo();
accordionThree();
accordionFour();
