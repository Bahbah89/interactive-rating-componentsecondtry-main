"use strict";

const start = document.querySelector(".startContainer");
const end = document.querySelector(".endContainer");

const submitbtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

// when clicking on submit button, startcontainer hides and endcontainer gets added.
submitbtn.addEventListener("click", function () {
  end.classList.remove("hidden");
  start.style.display = "none";
});

// when clicking on rate again button, end container hides and startcontainer gets added
rateAgain.addEventListener("click", function () {
  end.classList.add("hidden");
  start.style.display = "block";
});

// for each button, when clicked, the corresponding number will be added to the id rating in the text
rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rating.textContent = rate.textContent;
  });
});
