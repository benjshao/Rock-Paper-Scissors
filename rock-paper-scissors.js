let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    const computerChoice = computerPlay();
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        playerScore++; 
        let message = "You win! Rock beats Scissors.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore;
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        computerScore++;
        let message = "You lose! Paper beats Rock.\nScore:\nPlayer: " + playerScore + "\nComputer: " + computerScore;
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        playerScore++; 
        let message = "You win! Paper beats Rock."
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        computerScore++;
        let message = "You lose! Paper beats Scissors."
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        playerScore++; 
        let message = "You win! Scissors beats Paper."
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        computerScore++;
        let message = "You lose! rock beats Scissors."
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    else if (playerChoice.toLowerCase() == computerChoice) {
        let message = "Tied!"
        document.getElementById('message').innerHTML = message;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
    scoreCheck();
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    currentScore = playRound(playerScore, computerScore);
    playerScore = currentScore[0];
    computerScore = currentScore[1];
    
    console.log("The final score is:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
}

function scoreCheck() {
    if (playerScore == 5) {
        document.getElementById('final-score').innerHTML = "You win!";
    }
    else if (computerScore == 5) {
        document.getElementById('final-score').innerHTML = "Computer wins!";
    }
}


