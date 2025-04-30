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
 
        );
        if (humanLoses) {
            computerScore++;
            return "You lose!";
        } else {
            humanScore++;
            return "You win!";
        }
}

function playGame() {
    // Loop through 5 rounds
    for (let i = 0; i < 5; i++)
        // call the getHumanChoice and computerChoice functions 
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        //call the playRound function to log the outcome and update human score/ computer score
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final result
    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a draw!");
    }
}

// Start the game
playGame();