const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice(){
    let choice = undefined;
    switch(Math.floor(Math.random() * 3)) {
        case ROCK:
            choice ="rock"
            break;
        case PAPER:
            choice = "paper"
            break;
        case SCISSORS:
            choice ="scissors"
            break;
    }

    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        let resultDiv = document.querySelector("#results");

        if(humanChoice === "rock"){
            if(computerChoice === "rock"){
                resultDiv.textContent = "Draw, rock vs rock";
            }else if(computerChoice === "paper"){
                resultDiv.textContent = "You lose! Paper beats rock";
                computerScore++; 
            }else {
                resultDiv.textContent = "You win! Rock beats scissors";
                humanScore++;
            }
        }else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                resultDiv.textContent = "You win! Paper beats rock";
                humanScore++;
            }else if(computerChoice === "paper"){
                resultDiv.textContent = "Draw!";
            }else {
                resultDiv.textContent = "You loose! Scissors beats paper";
                computerScore++; 
            }
        }else if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
                resultDiv.textContent ="You loose! Rock beats scissors";
                computerScore++; 
            }else if(computerChoice === "paper"){
                resultDiv.textContent ="You win! Scissors beats paper";
                humanScore++;
            }else {
                resultDiv.textContent = "Draw";
            }
        }
                
        let scoreDiv = document.querySelector("#score");
        if(humanScore === 5){
            scoreDiv.textContent = "You Won!!";
            humanScore = 0;
            computerScore = 0;
        } else if(computerScore === 5){
            scoreDiv.textContent = "You Loose!!";
            computerScore = 0;
            humanScore = 0;
        } else{
            scoreDiv.textContent = "Your score: " + humanScore +
             "  AI score: " + computerScore;
        }
    }

    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let userChoice = button.textContent;
            playRound(userChoice, getComputerChoice());
        })
    })
}

playGame();