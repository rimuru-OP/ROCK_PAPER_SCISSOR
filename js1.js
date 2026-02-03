function getComputerChoice(){
    let x = Math.random();
    if(x<0.3){
        return "rock";
    }
    else if(x<0.6){
        return "paper";
    }
    return "scissor";
}
x = true;
while(x){
    let comp = getComputerChoice();
    let user = prompt("WHAT IS YOUR CHOICE (rock/paper/scissor): ");
    console.log('USER -> ' + user + ' | ' + comp + ' <- COMPUTER');
    if(user === comp){
        console.log('DRAW');
        continue;
    }
    if((user === "rock" && comp === "scissor") || (user === "paper" && comp === "rock") || (user === "scissor" && comp === "paper")){
        console.log('USER WON');
    }
    else {
        console.log('COMPUTER WON');
    }
    let w = prompt('Do you want to continue(Y/N) :');
    if(w==='Y'){
        x = true;
    } else{
        x = false;
    }
}
