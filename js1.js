function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function decideWinner(user, comp) {
  if (user === comp) return "DRAW";

  if (
    (user === "rock" && comp === "scissor") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissor" && comp === "paper")
  ) {
    return "USER WON";
  }

  return "COMPUTER WON";
}

const userSpan = document.querySelector("#user");
const computerSpan = document.querySelector("#computer");
const final = document.querySelector("#final");
const buttons = document.querySelectorAll(".choices button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    userSpan.textContent = userChoice;
    computerSpan.textContent = computerChoice;
    final.textContent = decideWinner(userChoice, computerChoice);
  });
});
