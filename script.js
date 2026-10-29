const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    }   else if (randomNumber < 0.66) {
        return "paper";
    }   else {
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    let result = prompt("Rock, paper, or scissors? ");
    return result;
}

function playRound(humanChoice, computerChoice) {
    const humanLower = humanChoice.toLowerCase();

    if (humanLower === computerChoice) {
        return "it's a tie!";
    }
    else if (
        (humanLower === "rock" && computerChoice === "scissors") ||
        (humanLower === "paper" && computerChoice === "rock") ||
        (humanLower === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanLower} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanLower}`);
    }
}
