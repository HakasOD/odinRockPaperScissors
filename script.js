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

function getHumanChoice(){
    let choice = prompt("Enter rock, paper or scissors");

    return choice.toLowerCase();
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let amountOfRounds = 5;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice === "rock"){
            if(computerChoice === "rock"){
                console.log("Draw, rock vs rock");
            }else if(computerChoice === "paper"){
                console.log("You lose! Paper beats rock");
                computerScore++; 
            }else {
                console.log("You win! Rock beats scissors")
                humanScore++;
            }
        }else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                console.log("You win! Paper beats rock");
                humanScore++;
            }else if(computerChoice === "paper"){
                console.log("Draw!");
            }else {
                console.log("You loose! Scissors beats paper")
                computerScore++; 
            }
        }else if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
                console.log("You loose! Rock beats scissors");
                computerScore++; 
            }else if(computerChoice === "paper"){
                console.log("You win! Scissors beats paper");
                humanScore++;
            }else {
                console.log("Draw");
            }
        }

    }

    for (i = 0; i < amountOfRounds; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score: ${humanScore} vs ${computerScore} (computer)`)
    }
}

playGame();