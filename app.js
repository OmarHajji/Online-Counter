"use strict";
const targetBtn = document.getElementById("target-btn");
const resetBtn = document.getElementById("reset-btn");
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const content = document.querySelector("h1");
const targetContent = document.querySelector("h2");
const counterBody = document.getElementById("counter");

let number = 0;

function add() {
  number++;
  content.innerText = number;
  checkTargetReached();
}

plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", () => {
  if (number > 0) {
    number--;
    content.innerText = number;
    checkTargetReached();
  }
});
resetBtn.addEventListener("click", () => {
  number = 0;
  content.innerText = number;
  checkTargetReached();
});
let target;

targetBtn.addEventListener("click", () => {
  if (targetContent.innerText) {
    targetContent.innerText = "";
    checkTargetReached();
  } else {
    target = prompt("Set a target: ");

    if (Number(target) > 0) {
      targetContent.innerText = `/${target}`;
      console.log(target);
      checkTargetReached();
    }
  }
});
function checkTargetReached() {
  if (Number(target) === number && targetContent.innerText) {
    counterBody.style.backgroundColor = "#00eb3b83";
  } else if (number > Number(target) && targetContent.innerText) {
    counterBody.style.backgroundColor = "#ff6969ff";
  } else counterBody.style.backgroundColor = "";
}
