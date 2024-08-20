var humanScore = 0
var computerScore = 0

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

function getComputerChoice() {
    const rock = "rock"
    const paper = "paper"
    const scissors = "scissors"
    const result = Math.ceil(Math.random() * 3)
    if (result === 1) {
        return rock;
    } else if (result === 2) {
        return paper;
    } else {
        return scissors;
    }   
}

function getHumanChoice(choice) {
    const rock = "rock"
    const paper = "paper"
    const scissors = "scissors"
    var choice = prompt("So? Rock, Paper or Scissors?");
    if (choice === "rock") {
        return console.log(rock);
    }
    else if (choice === "paper") {
        return console.log(paper);
    }
    else if (choice === "scissors") {
        return console.log(scissors);
    } else {
        console.log("You have to choose, dude.")
    }
}
function playRound(humanChoice, computerChoice) {
    var humanChoice = getHumanChoice()
    var computerChoice = getComputerChoice()
    
    if (humanChoice === "rock" && computerChoice === "paper") {
            return console.log("You lose! Paper destroys Rock!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
            return console.log("You win! Rock destroys Scissors!");
    } else if (humanChoice === "rock" && computerChoice === "rock") {
            return console.log("Draw! No winners. :(");
    } 
    else if (humanChoice === "paper" && computerChoice === "paper") {
            return console.log("Draw! No winners. :(");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
            return console.log("You lose! Scissors destroys Paper!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
            return console.log("You win! Paper destroys Rock!")
    }
     else if (humanChoice === "scissors" && computerChoice === "paper") {
        return console.log("You win! Scissors destroys Paper!");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return console.log("Draw! No winners. :(");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return console.log("You lose! Rock destroys Scissors!")
    } 
    else {
        return console.log("Something is wrong!");
    }
}

