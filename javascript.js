humanScore = 0
computerScore = 0

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        }
        return "The final score is... HUMAN: " + humanScore + " ChatGPT: " + computerScore + "."
    }

    function playRound(humanChoice, computerChoice) {
        var humanChoice = getHumanChoice()
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
        function getHumanChoice(choice) {
            const rock = "rock"
            const paper = "paper"
            const scissors = "scissors"
            var choice = prompt("So? Rock, Paper or Scissors?").toLowerCase();
            if (choice == "rock") {
                return rock;
            }
            else if (choice == "paper") {
                return paper;
            }
            else if (choice == "scissors") {
                return scissors;
            } else {
                console.log("You have to choose, dude.")
            }
        }
        if (humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "rock" && computerChoice == "scissors") {
                humanScore++;
                console.log(`You win! ${humanChoice} destroys ${computerChoice}.`)
            }
        else if (humanChoice == "rock" && computerChoice == "paper" ||
                humanChoice == "paper" && computerChoice == "scissors" ||
                humanChoice == "scissors" && computerChoice == "rock") {
                computerScore++;
                console.log(`You lose! ${computerChoice} destroys ${humanChoice}.`)
            }
        else {
                console.log(`Tie.`)
        }
    }