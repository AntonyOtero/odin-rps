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
}

playGame();