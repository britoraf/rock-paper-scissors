// Scores variables //
let humanScore = 0
let computerScore = 0


const body = document.querySelector("body");

// Buttons creation //
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

// Selecting all buttons //
const buttons = document.createElement("div");
const h3 = document.querySelector("h3");
body.insertBefore(buttons, h3);

// Arranging the buttons inside buttons and before H3 //
buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);

// Buttons click event addition //
rockButton.addEventListener("click", () => resultsDiv.textContent = playRound("Rock"));
paperButton.addEventListener("click", () => resultsDiv.textContent = playRound("Paper"));
scissorsButton.addEventListener("click", () => resultsDiv.textContent = playRound("Scissors"));

// Div creation to show the round results //
const resultsDiv = document.createElement("div");
body.insertBefore(resultsDiv, h3);

// Event creation to show winner with 5 points //
const winnerDiv = document.createElement("div");
body.insertBefore(winnerDiv, h3);

document.addEventListener("click", () => {
  if (humanScore === 5) {
    humanScore = '0';
    computerScore = '0';
    winnerDiv.textContent = "YOU WIN!";
    buttons.remove();

  } else if (computerScore === 5) {
    humanScore = '0';
    computerScore = '0';
    winnerDiv.textContent = "SORRY, YOU LOSE!";
    buttons.remove();
  };
});

// Function playRound //
function playRound(humanChoice, computerChoice) {
  var computerChoice = getComputerChoice()

  function getComputerChoice() {
      const rock = "Rock"
      const paper = "Paper"
      const scissors = "Scissors"
      const result = Math.ceil(Math.random() * 3)
      if (result == 1) {
          return rock;
      } else if (result == 2) {
          return paper;
      } else {
          return scissors;
      }
  }
    if (humanChoice == "Paper" && computerChoice == "Rock" ||
        humanChoice == "Scissors" && computerChoice == "Paper" ||
        humanChoice == "Rock" && computerChoice == "Scissors") {
            humanScore++;
            return `HE HE BOI You win! ${humanChoice} destroys ${computerChoice}. (Player Score: ${humanScore} | CPU Score: ${computerScore})`
        }
    else if (humanChoice == "Rock" && computerChoice == "Paper" ||
            humanChoice == "Paper" && computerChoice == "Scissors" ||
            humanChoice == "Scissors" && computerChoice == "Rock") {
            computerScore++;
            return `You lose, dude! Damn this game. ${computerChoice} destroys ${humanChoice}.  (Player Score: ${humanScore} | CPU Score: ${computerScore})`
        }
    else {
            return `Tie.  (Player Score: ${humanScore} | CPU Score: ${computerScore})`
    }
}
