const buttons = document.querySelectorAll('.rps-button');

const playerScoreDis = document.querySelector('#player-score');
const compScoreDis = document.querySelector('#comp-score');

const message = document.querySelector('#message');

const reset = document.querySelector('#reset-button');
const resetButton = document.createElement('button');
resetButton.textContent = 'Play Again?';

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let outcome = playRound(button.id, computerPlay());
        message.textContent = outcome;
        // place console.log parameter above into a variable. 
        // round result adds a point to either player or comp
        // if and when score hits 5, display winner and ask for rematch?
        calcScore(outcome);

        
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                message.textContent = 'VICTORY! You beat the computer ' + playerScore + ' to ' + computerScore; 
                reset.appendChild(resetButton);
            } else if (playerScore < computerScore) {
                message.textContent = 'DEFEAT! The computer beat you ' + computerScore + ' to ' + playerScore;
                reset.appendChild(resetButton);
            }
        }

    })
})

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    compScoreDis.textContent = `Computer: ${computerScore}`;
    playerScoreDis.textContent = `Player: ${playerScore}`;
    message.textContent = 'Here we go again!';
    reset.removeChild(resetButton);
})



function computerPlay() {
    let myArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];

    let randomPick = myArray[Math.floor(Math.random() * myArray.length)];

    return randomPick;

};

function playRound(playerSelection, computerSelection) {
    let playerPick = playerSelection.toLowerCase();
    let computerPick = computerSelection.toLowerCase();



    if (playerPick === 'rock') {
        if (computerPick === 'rock') {
            return 'It\'s a tie!';
        } else if (computerPick === 'paper') {
            return 'Aww. Paper beats Rock';
        } else {
            return 'Nice. Rock beats Scissors';
        }
    } else if (playerPick === 'paper') {
        if (computerPick === 'rock') {
            return 'Nice. Paper beats Rock';
        } else if (computerPick === 'paper') {
            return 'It\'s a tie!';
        } else {
            return 'Aww. Scissors beats Paper';
        }
    } else {
        if (computerPick === 'rock') {
            return 'Aww. Rock beats Scissors';
        } else if (computerPick === 'paper') {
            return 'Nice. Scissors beats Paper';
        } else {
            return 'It\'s a tie!'
        }
    }

}


function calcScore(outcome) {
    if (outcome.charAt(0) === 'A') {
        compScoreDis.textContent = `Computer: ${++computerScore}`;
    } else if (outcome.charAt(0) === 'N') {
        playerScoreDis.textContent = `You: ${++playerScore}`;
    } else {
        console.log('tie');
    }

}




// calcResults function calcs the score and should return a victory or defeat message
function calcResults(result1, result2, result3, result4, result5) {
    let playerScore = 0;
    let computerScore = 0;

    if (result1.charAt(0) === 'A') {
        computerScore++;
    } else if (result1.charAt(0) === 'N') {
        playerScore++;
    }

    if (result2.charAt(0) === 'A') {
        computerScore++;
    } else if (result2.charAt(0) === 'N') {
        playerScore++;
    }

    if (result3.charAt(0) === 'A') {
        computerScore++;
    } else if (result3.charAt(0) === 'N') {
        playerScore++;
    }

    if (result4.charAt(0) === 'A') {
        computerScore++;
    } else if (result4.charAt(0) === 'N') {
        playerScore++;
    }

    if (result5.charAt(0) === 'A') {
        computerScore++;
    } else if (result5.charAt(0) === 'N') {
        playerScore++;
    }


    if (playerScore > computerScore) {
        return 'VICTORY! You beat the computer ' + playerScore + ' to ' + computerScore;
    } else if (playerScore < computerScore) {
        return 'DEFEAT! The computer beat you ' + computerScore + ' to ' + playerScore;
    } else {
        return 'You tied the computer ' + playerScore + ' to ' + computerScore;
    }


}

/* function game() {
    // run the playRound function 5 times with player input via prompt()

    // player inputs pick
    let playerSelection = prompt('Rock, Paper, or Scissors?', ' ');
    let computerSelection = computerPlay();
    let result1 = playRound(playerSelection, computerSelection);
    console.log(result1);


    playerSelection = prompt('Rock, Paper, or Scissors?', ' ');
    computerSelection = computerPlay();
    let result2 = playRound(playerSelection, computerSelection);
    console.log(result2);


    playerSelection = prompt('Rock, Paper, or Scissors?', ' ');
    computerSelection = computerPlay();
    let result3 = playRound(playerSelection, computerSelection);
    console.log(result3);


    playerSelection = prompt('Rock, Paper, or Scissors?', ' ');
    computerSelection = computerPlay();
    let result4 = playRound(playerSelection, computerSelection);
    console.log(result4);


    playerSelection = prompt('Rock, Paper, or Scissors?', ' ');
    computerSelection = computerPlay();
    let result5 = playRound(playerSelection, computerSelection);
    console.log(result5);

    console.log(calcResults(result1, result2, result3, result4, result5));



    // console returns result of the round along with the score after each round
    // after 5 rounds console reports GAME OVER along with the final score and declared winner



}

*/