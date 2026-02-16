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

let humanScore = document.querySelector(".humanScore");
let computerScore = document.querySelector(".computerScore");
let hs = 0, cs = 0;

function playRound(humanChoice, computerChoice){
  if(humanChoice =='p' && computerChoice =='r'){
    console.log("You win! Paper Beats Rock");
    hs++;
  }
  else if(humanChoice =='r' && computerChoice =='p'){
    console.log("You lose! Paper Beats Rock");
    cs++;
  }
  else if(humanChoice == 's' && computerChoice == 'p'){
    console.log("You win! Scissor Beats Paper");
    hs++;
  }
  else if(humanChoice == 'p' && computerChoice == 's'){
    console.log("You lose! Scissor Beats Paper");
    cs++;
  }
  else if(humanChoice == 'r' && computerChoice == 's'){
    console.log("You win! Rock Beats Scissor");
    hs++;
  }
  else if(humanChoice == 's' && computerChoice == 'r'){
    console.log("You lose! Rock Beats Scissor");
    cs++;
  }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
let annt = document.querySelector(".announce");
function updateDIV(){
  humanScore.textContent = hs;
  computerScore.textContent = cs;
  if(hs == 5){
    annt.textContent = "YAY YOU WON !!!";
    hs = 0;
    cs = 0;
  }
  if(cs == 5){
    annt.textContent = "OH YOU LOST COMPUTER WON AhhahahhAHHAHAH!!!"
    hs = 0;
    cs = 0;
  }
}
updateDIV();
rock.addEventListener('click', (e)=>{
  const c = getComputerChoice();
  playRound('r', c);
  updateDIV();
});

paper.addEventListener('click', (e)=>{
  const c = getComputerChoice();
  playRound('p', c);
  updateDIV();
});

scissor.addEventListener('click', (e)=>{
  const c = getComputerChoice();
  playRound('s', c);
  updateDIV();
});
