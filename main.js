// Get a random integer between min (inclusive) to max (exclusive)
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}  

// Get a random choice from the computer
getComputerChoice = () => {
    return ["rock", "paper", "scissors"][getRandomInt(0,3)];
}

// Get human input
getHumanChoice = () => {
    return prompt("Select Rock, Paper, or Scissors.");
}

playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    playRound = (humanChoice, computerChoice) => {
        let flexHumanChoice = humanChoice.toLowerCase();
    
        if (flexHumanChoice === computerChoice) {
            // tie
            console.log(`Tie! You both chose ${flexHumanChoice}`);
        } else if (flexHumanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats rock.");
            } else {
                humanScore++;
                console.log("You win! rock beats scissors.");
            }
        } else if (flexHumanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats rock.");
            } else {
                computerScore++;
                console.log("You lose! Scissor beats paper.");
            }
        } else if (flexHumanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats scissors.");
            } else {
                humanScore++;
                console.log("You win! Scissors beats paper.");
            }
        }
    }
    
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();