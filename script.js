let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("button");
let score = document.getElementById("score");
let result = document.querySelector(".result");

button.addEventListener("click", () => {
  let newHeight = Number(height.value);
  let newWeight = Number(weight.value);
  newHeight /= 100;
  let SquareHeight = newHeight * newHeight;
  let bmiValue = newWeight / SquareHeight;
  score.textContent = bmiValue.toFixed(1);
  result.style.display = "block";
  if (score.textContent < 18.5) {
    score.style.background = "#2202f2";
  } else if (score.textContent < 24.9) {
    score.style.background = "#098712";
  } else {
    score.style.background = "#f20202";
  }
});
let form = document.getElementById("form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
