const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetScore");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const result = document.querySelector("#result");
const maxScore = document.querySelector("#maxScore");
const resultDisplay = document.createElement("h1");
let p1ScoreCount = 0;
let p2ScoreCount = 0;
let gameOver = false;

p1Button.addEventListener("click", function (e) {
  if (!gameOver) {
    p1ScoreCount += 1;
    p1Score.textContent = p1ScoreCount;
  }
  let maxScoreValue = parseInt(maxScore.value);
  if (p1ScoreCount === maxScoreValue) {
    gameOver = true;

    resultDisplay.textContent = "Player 1 Won";
    result.appendChild(resultDisplay);
  }
});

p2Button.addEventListener("click", function (e) {
  if (!gameOver) {
    p2ScoreCount += 1;
    p2Score.textContent = p2ScoreCount;
  }
  let maxScoreValue = parseInt(maxScore.value);
  if (p2ScoreCount === maxScoreValue) {
    gameOver = true;
    resultDisplay.textContent = "Player 2 Won";
    result.appendChild(resultDisplay);
  }
});

resetButton.addEventListener("click", function () {
  p1ScoreCount = 0;
  p2ScoreCount = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  gameOver = false;
  result.removeChild(resultDisplay);
});

//Basic logic Created Sarvesh Chaudhari 3/08/2024
