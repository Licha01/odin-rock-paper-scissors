// ORIGNIAL //

let x = 0;
let y = 0;
let playerSelection, text;

const button = document.querySelectorAll("button");
const score0 = document.querySelector(".score--0");
const score1 = document.querySelector(".score--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const match = document.querySelector(".match");

function computerPlay() {
  let x = Math.random() * 3;
  if (x < 1) {
    var computerSelection = "rock";
  } else if (1 < x && x < 2) {
    var computerSelection = "paper";
  } else {
    var computerSelection = "scissors";
  }
  return computerSelection;
}

function playRound() {
  var computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    match.textContent = "Tie!";
    return 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    match.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 2;
  } else {
    match.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    return 3;
  }
}

function game() {
  var game = playRound();
  if (game === 2) {
    x += 1;
    console.log(x);
  } else if (game === 3) {
    y += 1;
    console.log(y);
  }
}

button.forEach((button) =>
  button.addEventListener("click", function () {
    if (button.id == "rock") {
      playerSelection = "rock";
    } else if (button.id == "scissors") {
      playerSelection = "scissors";
    } else {
      playerSelection = "paper";
    }

    game();

    i = x + y;

    score0.textContent = x;
    score1.textContent = y;

    if (i === 5) {
      if (x > y) {
        match.textContent = `Game over! Player Wins! ${x} ${y}`;
        x = 0;
        y = 0;
      } else {
        match.textContent = `Game over! Computer Wins! ${x} ${y}`;
        x = 0;
        y = 0;
      }
    }
  })
);
