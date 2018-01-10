const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const results = document.querySelector('.results');
const roundScore = document.querySelector('.roundScore');
const p = document.createElement('p');

let userScore = 0;
let computerScore = 0;
let maxRounds = 5;
let roundsPlayed = 0;


// This is where the players choice is recieved

rockButton.addEventListener('click', () => {
  p.textContent = playRound("rock", computerSelection());
  roundScore.appendChild(p);
  scoreBoard();
});

paperButton.addEventListener('click', () => {
  p.textContent = playRound("paper", computerSelection());
  roundScore.appendChild(p);
  scoreBoard();
});

scissorsButton.addEventListener('click', () => {
  p.textContent = playRound("scissors", computerSelection());
  roundScore.appendChild(p);
  scoreBoard();
});


// This is where the computer makes it's choice

function computerSelection() {
  var choice = Math.random();
    if (choice <= 0.34) {
      return "rock";
    }
    else if (choice <= 0.67) {
      return "paper";
    }
    else {
      return "scissors";
    }
};


// This is where the game compares the players and the computers choices

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      roundsPlayed++;
      return "Draw! You both chose rock!";
  } else if (computerSelection === "paper") {
      roundsPlayed++;
      computerScore++;
      document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
      return "You lose! Paper beats rock!";
  } else {
      roundsPlayed++;
      userScore++;
      document.querySelector("#userScore").textContent = "Your Score: " + userScore;
      return "You win! Rock beats scissors!";
    };
  };

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      roundsPlayed++;
      userScore++;
      document.querySelector("#userScore").textContent = "Your Score: " + userScore;
      return "You win! Paper beats rock!";
  } else if (computerSelection === "paper") {
      roundsPlayed++;
      return "Draw! You both chose paper!";
  } else {
      roundsPlayed++;
      computerScore++;
      document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
      return "You lose! Scissors beats paper!";
    };
  };

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      roundsPlayed++;
      computerScore++;
      document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
      return "You lose! Rock beats scissors!";
  } else if (computerSelection === "paper") {
      roundsPlayed++;
      userScore++;
      document.querySelector("#userScore").textContent = "Your Score: " + userScore;
      return "You win! Scissors beats paper!";
  } else {
      roundsPlayed++;
      return "Draw! You both chose scissors!";
    };
  };
};


//Increments roundsPlayed, userScore, computerScore, and disables buttons after 5 rounds have been played.

function scoreBoard() {
  if (roundsPlayed === maxRounds) {
    rock.setAttribute('disabled', '');
    paper.setAttribute('disabled', '');
    scissors.setAttribute('disabled', '');
    if (userScore > computerScore) {
      document.querySelector("#finalResults").textContent = "You beat the computer!";
    } else if (computerScore > userScore) {
      document.querySelector("#finalResults").textContent = "The computer beat you!";
    } else {
      document.querySelector("#finalResults").textContent = "This game was a tie!";
    }
  };
};


// Need to impliment a maximum of 5 rounds
// Need to impliment a score board
// Need to style the page better
// Start new round feature (bypassing needing to refresh page)
