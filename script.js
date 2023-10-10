"use strict";

const start = document.querySelector(".startContainer");
const end = document.querySelector(".endContainer");

const submitbtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitbtn.addEventListener("click", function () {
  end.classList.remove("hidden");
  start.style.display = "none";
});

rateAgain.addEventListener("click", function () {
  end.classList.add("hidden");
  start.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rating.textContent = rate.textContent;
  });
});
