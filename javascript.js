//user needs to input a choice
//browser needs to decide what its going to use
//needs to announce what browser chose, what you chose, compare those and see who wins
//then announce winner

let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;

let buttons = document.querySelectorAll('button');
let score = document.querySelector('#score');

buttons.forEach((button) => {
  if (button.getAttribute('id') === 'rock') {
    button.addEventListener('click', () => {
      playRound('rock', getComputerChoice());
      checkWinner();
    });
  } else if (button.getAttribute('id') === 'paper') {
    button.addEventListener('click', () => {
      playRound('paper', getComputerChoice());
      checkWinner();
    });
  } else if (button.getAttribute('id') === 'scissors') {
    button.addEventListener('click', () => {
      playRound('scissors', getComputerChoice());
      checkWinner();
    });
  }
});


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'scissors';
  } else if (randomNumber === 2) {
    return 'rock';
  } else return 'paper';
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    tieCounter++;
    return (score.textContent = `Tie x${tieCounter}!
      You: ${humanScore}
      Computer: ${computerScore}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    ++humanScore;
    return (score.textContent = `You won the round!
      You: ${humanScore}
      Computer: ${computerScore}`);
  } else {
    ++computerScore;
    return (score.textContent = `Computer won the round!
      You: ${humanScore}
      Computer: ${computerScore}`);
  }
}

function determineWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return 'Human';
  } else if (humanScore < computerScore) {
    return 'Computer';
  } else
    return console.log(`something went wrong?? 
    computer score: ${computerScore}
    human score ${humanScore}`);
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    let winner = determineWinner(humanScore, computerScore);
    score.textContent = `${winner} won! 
    Final score was
    You: ${humanScore}
    Computer: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
    tieCounter = 0;
  }
}
