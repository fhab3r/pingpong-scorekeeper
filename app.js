const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const resetButton = document.querySelector("#reset");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const winningScoreSelect = document.querySelector("#playto");

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameover = false;

p1button.addEventListener("click", function () {
  if (!isGameover) {
    p1score += 1;
    if (p1score === winningScore) {
      isGameover = true;
      p1display.classList.add("has-text-success");
      p2display.classList.add("has-text-danger");
      p1button.disabled = true;
      p2button.disabled = true;
    }
  }
  p1display.textContent = p1score;
});

p2button.addEventListener("click", function () {
  if (!isGameover) {
    p2score += 1;
    if (p2score === winningScore) {
      isGameover = true;
      p2display.classList.add("has-text-success");
      p1display.classList.add("has-text-danger");
      p1button.disabled = true;
      p2button.disabled = true;
    }
  }
  p2display.textContent = p2score;
});

winningScoreSelect.addEventListener("change", function () {
  // parseint turns string to a number
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameover = false;
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("has-text-success", "has-text-danger");
  p2display.classList.remove("has-text-success", "has-text-danger");
  p1button.disabled = false;
  p2button.disabled = false;
}
