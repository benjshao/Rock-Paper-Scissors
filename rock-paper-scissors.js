function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerScore, computerScore) {
    const computerChoice = computerPlay();
    const playerChoice = prompt("Rock, paper, scissors!");
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        playerScore++; 
        console.log("You win! Rock beats Scissors.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        playerScore++; 
        console.log("You win! Paper beats Rock.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose! Paper beats Scissors.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        playerScore++; 
        console.log("You win! Scissors beats Paper.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! rock beats Scissors.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerChoice.toLowerCase() == computerChoice) {
        console.log("Tied!\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    return [playerScore, computerScore]
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let currentScore = playRound(playerScore, computerScore);
        playerScore = currentScore[0];
        computerScore = currentScore[1];
    }
    console.log("The final score is:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
}
game();