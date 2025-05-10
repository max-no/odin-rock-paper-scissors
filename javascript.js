//user needs to input a choice
//browser needs to decide what its going to use
//needs to announce what browser chose, what you chose, compare those and see who wins
//then announce winner

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt('Rock, paper, or scissors?');
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

function getComputerChoice() {
  let randomNumber = Math.floor((Math.random()*3)+1);
  if (randomNumber <= 1) {
    return 'scissors';
  } else if (1 < randomNumber <= 2) {
    return 'rock';
  } else return 'paper';
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return console.log(`TIE! You: ${humanScore}, Computer: ${computerScore}
        You chose ${humanChoice}, computer chose ${computerChoice}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    ++humanScore;
    return console.log(
      `You WIN! You: ${humanScore}, Computer: ${computerScore}.
      You chose ${humanChoice}, computer chose ${computerChoice}`
    );
  } else {
    ++computerScore;
    return console.log(
      `You LOSE! You: ${humanScore}, Computer: ${computerScore}.
      You chose ${humanChoice}, computer chose ${computerChoice}`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    return console.log('You win!');
  } else if (computerScore > humanScore) {
    return console.log('You lose!');
  } else return console.log('You tie!');
}

playGame();
