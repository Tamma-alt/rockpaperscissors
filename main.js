const choices = ["rock", "paper", "scissors"];

function game() {
  // play the game
  // play five rounds
  // console based
   
   playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = getComputerChoice();
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
     input = prompt("Type Rock, Paper or scissors,spelling needs to be exact, but capitallisation doesn't matter");
   }
   input = input.toLowerCase();
   check = validateInput(input);
//   console.log(input);
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

game();
