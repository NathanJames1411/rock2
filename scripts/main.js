var playerSelection = prompt("Rock, Paper, or Scissors?");
playerSelection = playerSelection.toLowerCase();

var computerSelection = Math.random();
  if (computerSelection <= 0.34) {
    computerSelection = "rock";
  }
  else if (computerSelection <= 0.67) {
    computerSelection = "paper";
  }
  else {
    computerSelection = "scissors";
  }

var win = ("You win! " + playerSelection + " beats " + computerSelection + "!");
var lose = ("You lose. " + computerSelection + " beats " + playerSelection + ".");
var draw = ("Draw. You both chose " + playerSelection + ".");

function playRound(choice1, choice2) {
  if (choice2 === "rock") {
    if (choice1 === "rock") {
      return draw;
    } else if (choice1 === "paper") {
      return win;
    } else {
      return lose;
    }
  }
  if (choice2 === "paper") {
          if (choice1 === "rock") {
      return lose;
    } else if (choice1 === "paper") {
      return draw;
    } else {
      return win;
    }
  }

  if (choice2 === "scissors") {
    if (choice1 === "rock") {
      return win;
    } else if (choice1 === "paper") {
      return lose;
    } else {
      return draw;
    }
  }
}

console.log(playRound(playerSelection, computerSelection))
