console.log("Hello World")

// create function getComputerChoice which returns a variable (rock, paper scissors)

function getComputerChoice(choice) {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "option1";
    } else if (choice <= 2) {
        choice = "option2";
    } else {
        choice = "option3";
    }
}


// use Math.random (returns equal to 0 up to 1)

// function returns variable (rock, paper scissors)