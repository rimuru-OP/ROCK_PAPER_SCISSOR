function getComputerChoice(){
  const mt = Math.random();
  if(mt<0.333){
    return "r";
  }
  if(mt<0.667){
    return "p";
  }
  return "s";
}

function getHumanChoice(){
  const ist = prompt("ENTER YOUR CHOICE(r/p/s): ");
  return ist.charAt(0).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  if(humanChoice =='p' && computerChoice =='r'){
    console.log("You win! Paper Beats Rock");
    humanScore++;
  }
  else if(humanChoice =='r' && computerChoice =='p'){
    console.log("You lose! Paper Beats Rock");
    computerScore++;
  }
  else if(humanChoice == 's' && computerChoice == 'p'){
    console.log("You win! Scissor Beats Paper");
    humanScore++;
  }
  else if(humanChoice == 'p' && computerChoice == 's'){
    console.log("You lose! Scissor Beats Paper");
    computerScore++;
  }
  else if(humanChoice == 'r' && computerChoice == 's'){
    console.log("You win! Rock Beats Scissor");
    humanScore++;
  }
  else if(humanChoice == 's' && computerChoice == 'r'){
    console.log("You lose! Rock Beats Scissor");
    computerScore++;
  }
}

function playGame(){
  for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection === computerSelection) {
      console.log("It's a tie!");
      console.log(`"Human :` , humanScore , ' Computer :' , computerScore);
      continue;
    }
    playRound(humanSelection, computerSelection);
    console.log(`"Human :` , humanScore , ' Computer :' , computerScore);
  }
}

playGame();