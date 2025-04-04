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
getPlayerChoice = () => {
    return prompt("Select Rock, Paper, or Scissors.");
}

playGame = () => {
    const BUTTONS = document.querySelectorAll(".btn");
    const RESULT = document.querySelector("#result");
    const PLAYER_SCORE = document.querySelector("#playerScore");
    const COMPUTER_SCORE = document.querySelector("#computerScore");

    let playerScore = 0;
    let computerScore = 0;

    playRound = (playerChoice, computerChoice) => {
        let flexPlayerChoice = playerChoice.toLowerCase();
    
        if (flexPlayerChoice === computerChoice) {
            RESULT.textContent = `Tie! You both chose ${flexPlayerChoice}`;
        } else if (flexPlayerChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore++;
                RESULT.textContent = "You lose! Paper beats rock.";
            } else {
                playerScore++;
                RESULT.textContent = "You win! rock beats scissors.";
            }
        } else if (flexPlayerChoice === "paper") {
            if (computerChoice === "rock") {
                playerScore++;
                RESULT.textContent = "You win! Paper beats rock.";
            } else {
                computerScore++;
                RESULT.textContent = "You lose! Scissor beats paper.";
            }
        } else if (flexPlayerChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                RESULT.textContent = "You lose! Rock beats scissors.";
            } else {
                playerScore++;
                RESULT.textContent = "You win! Scissors beats paper.";
            }
        }
        PLAYER_SCORE.textContent = `Player: ${playerScore}`;
        COMPUTER_SCORE.textContent = `CPU: ${computerScore}`;

        if (playerScore >= 5 || computerScore >= 5) {
            BUTTONS.forEach(button => document.querySelector(".container").removeChild(button));
            RESULT.textContent = (playerScore > computerScore) ? "Congratulations! You won the game!" : "Oh no! You lost the game!";
        }
    }

    BUTTONS.forEach(button => {
        button.addEventListener("click", e => playRound(e.target.textContent, getComputerChoice()));
    });
    
}

playGame();