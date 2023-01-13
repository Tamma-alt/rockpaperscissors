const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  // play the game
  // play five rounds
  // console based
   for (let i = 0; i <= 5; i++) {
      playRound()
   }

   logWins();
}

function playRound() {
  const playerSelection = playerChoice();
   const computerSelection = getComputerChoice();
   const winner = checkWinner(playerSelection, computerSelection);
   winners = push(winner)
}

function playerChoice() {
   // get input from player
   let input = prompt("Type Rock, Paper or scissors");
   while (input == null) {
      input = prompt("Type Rock, Paper or scissors");
   }
   input = input.toLowerCase();
   let check = validateInput(input);
   while (check == false) {
      input = prompt(
         "Type Rock, Paper or scissors,spelling needs to be exact, but capitallisation doesn't matter"
      );

   while (input == null) {
      input = prompt("Type Rock, Paper or scissors");
   }
   input = input.toLowerCase();
   check = validateInput(input);
}
return input;
}



function getComputerChoice() {
  // get random input from computer
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choices) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "computer";
  }
}

function logWins() {
   console.log(winners);
}

game();
