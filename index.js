// create function getComputerChoice which returns a variable (rock, paper scissors)
function getComputerChoice() {
    // use Math.random (returns equal to 0 up to 1)
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        computerChoice = "rock";
    } else if (computerChoice <= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
   // function returns variable (rock, paper scissors)
    return computerChoice;
}

// create function getHumanChoice (use prompt method to get user input)

function getHumanChoice() {
    let humanChoice = prompt("Please enter Rock, Paper or Scissors")
// return the users choice
return humanChoice;


}




