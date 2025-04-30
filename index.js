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
    humanChoice = humanChoice.toLowerCase();
// return the users choice
return humanChoice;
}

// declare the players score variables

let humanScore = 0;
let computerScore = 0;

// create logic to play a single round
// create new function playRound

function playRound(humanChoice, computerChoice) {
// console.log choices
console.log (`You chose ${humanChoice}`);
console.log (`Computer chose ${computerChoice}`);

// if computer and human choose same variable = draw
if (humanChoice === computerChoice) {
    return "It's a drawer!";
}

// if computer chooses rock and human chooses scissors = human loses
// if computer chooses scissors and human chooses paper = human loses
// if computer chooses paper and human chooses rock = human loses
const humanLoses = (
(computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "scissors" && humanChoice === "paper") || 
        (computerChoice === "paper" && humanChoice === "rock") 
 
        )
}

// console log human loses

// if computer chooses scissors and human chooses rock = human wins

// if computer chooses paper and human chooses scissors = human wins

// if computer chooses rock and human chooses paper = human wins

// console log human wins

// increment human score or computer score variable based on round winner

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}


