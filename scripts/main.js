const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const results = document.querySelector('.results');
const p = document.createElement('p');

let userScore = 0;
let computerScore = 0;


// This is where the players choice is recieved

rockButton.addEventListener('click', () => {
  p.textContent = playRound("rock", computerSelection());
  results.appendChild(p);
  points();
});

paperButton.addEventListener('click', () => {
  p.textContent = playRound("paper", computerSelection());
  results.appendChild(p);
  points();
});

scissorsButton.addEventListener('click', () => {
  p.textContent = playRound("scissors", computerSelection());
  results.appendChild(p);
  points();
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
      return "Draw! You both chose rock!";
  } else if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock!";
  } else {
      userScore++;
      return "You win! Rock beats scissors!";
    };
  };

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      userScore++;
      return "You win! Paper beats rock!";
  } else if (computerSelection === "paper") {
      return "Draw! You both chose paper!";
  } else {
      computerScore++;
      return "You lose! Scissors beats paper!";
    };
  };

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors!";
  } else if (computerSelection === "paper") {
      userScore++;
      return "You win! Scissors beats paper!";
  } else {
      return "Draw! You both chose scissors!";
    };
  };
};


//play max of 5 rounds

function points() {
  if (userScore === 5) {
    rock.Attribute('disabled', '');
    paper.Attribute('disabled', '');
    scissors.Attribute('disabled', '');
    return "You win! You were the first to reach 5 points!";
  };
  if (computerScore === 5) {
    rock.Attribute('disabled', '');
    paper.Attribute('disabled', '');
    scissors.Attribute('disabled', '');
    return "You lose! The computer reached 5 points before you did!";
  };
};


// Need to impliment a maximum of 5 rounds
// Need to impliment a score board
// Need to style the page better
