humanScore = 0
computerScore = 0


const body = document.querySelector("body");

// Buttons creation //
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

// Arranging the buttons inside body and before H3 //
const h3 = document.querySelector("h3");
body.insertBefore(rockButton, h3);
body.insertBefore(paperButton, h3);
body.insertBefore(scissorsButton, h3);

// Buttons click event addition //
rockButton.addEventListener("click", () => results.textContent = playRound("rock"));
paperButton.addEventListener("click", () => results.textContent = playRound("paper"));
scissorsButton.addEventListener("click", () => results.textContent = playRound("scissors"));

// Div creation to show the game results //
const results = document.createElement("div");
body.insertBefore(results, h3);

// Function playRound //
function playRound(humanChoice, computerChoice) {
  var computerChoice = getComputerChoice()

  function getComputerChoice() {
      const rock = "rock"
      const paper = "paper"
      const scissors = "scissors"
      const result = Math.ceil(Math.random() * 3)
      if (result == 1) {
          return rock;
      } else if (result == 2) {
          return paper;
      } else {
          return scissors;
      }
  }
    if (humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return `HE HE BOY You win! ${humanChoice} destroys ${computerChoice}.`
        }
    else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return `You lose, dude! Damn this game. ${computerChoice} destroys ${humanChoice}.`
        }
    else {
            return `Tie.`
    }
}
