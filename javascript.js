

// function getComputerChoice(num) {
//     const rock = "Rock"
//     const paper = "Paper"
//     const scissors = "Scissors"
//     const result = Math.ceil(Math.random() * 3)
//      if (result === 1) {
//         return console.log("rock");
//      }
//      else if (result === 2) {
//         return console.log("paper");
//      } 
//      else { (result === 3) 
//         return console.log("scissors");
//      }
// }

function getComputerChoice() {

    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"
    const result = Math.ceil(Math.random() * 3)
    if (result === 1) {
        return rock;
    } else if (result === 2) {
        return paper;
    } else {
        return scissors;
    }   
}

