const buttons = {
  scissor: document.getElementById("scissor-btn"),
  rock: document.getElementById("rock-btn"),
  paper: document.getElementById("paper-btn"),
};

let myScore = 0;
let computerScore = 0;

const scoreElements = {
  my: document.getElementById("myScore"),
  computer: document.getElementById("computerScore"),
};

const choices = ["Scissors", "Rock", "Paper"]; // 0, 1, 2

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function checkGameScores(playerChoice) {
  const computerChoice = getComputerChoice();

  // Draw
  if (playerChoice === computerChoice) {
    alert(`Both chose ${choices[playerChoice]} — It's a draw!`);
    return;
  }

  // Winning logic: (Scissors beats Paper), (Rock beats Scissors), (Paper beats Rock)
  const win =
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 2 && computerChoice === 1);

  if (win) {
    myScore++;
    alert(`You won! ${choices[playerChoice]} beats ${choices[computerChoice]}`);
  } else {
    computerScore++;
    alert(`You lost! ${choices[computerChoice]} beats ${choices[playerChoice]}`);
  }

  // Update scores
  scoreElements.my.textContent = myScore;
  scoreElements.computer.textContent = computerScore;

  // End game if someone reaches 5
  if (myScore === 5 || computerScore === 5) {
    const result = myScore === 5 ? "🎉 You won the game!" : "💻 Computer won the game!";
    alert(result);
    resetGame();
  }
}

function resetGame() {
  myScore = 0;
  computerScore = 0;
  scoreElements.my.textContent = 0;
  scoreElements.computer.textContent = 0;
}

// Add event listeners dynamically
Object.keys(buttons).forEach((key, index) => {
  buttons[key].addEventListener("click", () => checkGameScores(index));
});
