// create function getComputerChoice which returns a variable (rock, paper scissors)

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "rock";
    } else if (choice <= 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}


// use Math.random (returns equal to 0 up to 1)

// function returns variable (rock, paper scissors)