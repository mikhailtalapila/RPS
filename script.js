function getComputerChoice() {
  return Math.floor(Math.random() * 100);
}

function getRPSObject(number) {
  if (number > 66) {
    return "scissors";
  } else if (number > 33) {
    return "paper";
  } else {
    return "rock";
  }
}

function displayResult(humanScore, computerScore) {
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = `Score: Human (${humanScore}) - Computer (${computerScore})`;
}

function displayFinalScore(humanScore, computerScore) {
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = `Final score: Human (${humanScore}) - Computer (${computerScore})`;
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (!button.classList.contains("start")) {
      button.disabled = true;
    }
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (!button.classList.contains("start")) {
      button.disabled = false;
    }
  });
}

const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", function () {
  playGame();
});

let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;

function playGame() {
  computerScore = 0;
  humanScore = 0;
  roundsPlayed = 0;
  enableButtons();
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = "Game started. Make your move.";
}

const gameButtons = document.querySelectorAll("button");
gameButtons.forEach((button) => {
  if (button.classList.contains("start")) return;
  button.addEventListener("click", function (event) {
    humanSelection = event.currentTarget.textContent;
    const computerSelection = getRPSObject(getComputerChoice());
    console.log(`Human selection: ${humanSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    if (roundsPlayed === 4) {
      displayFinalScore(humanScore, computerScore);
      disableButtons();
    } else {
      playRound(humanSelection, computerSelection);
      displayResult(humanScore, computerScore);
      roundsPlayed++;
    }
  });
});

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();
  if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore++;
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("TIE!");
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    computerScore++;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    humanScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    computerScore++;
  }
}
