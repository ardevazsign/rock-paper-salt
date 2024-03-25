
let playerScore = 0;
let computerScore = 0;



function playGame(playerChoice){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice =
    choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    

    if(playerChoice === computerChoice) {
        result = "It's s tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        playerScore++;

        document.getElementById("playerScore").textContent = playerScore;

    } else {
        result = "Computer Wins!";
        computerScore++;

        document.getElementById("computerScore").textContent = computerScore;
      
    }
    document.getElementById("result").textContent = result;

    document.getElementById("playersBeat").textContent = `${playerChoice}`;
    document.getElementById("computersBeat").textContent = `${computerChoice}`;

}


// switch (computersBeat) {
//     case 0:
//         comp.innerText = "Computer Picked: Rock";
//         break;
//     case 1:  
//         comp.innerText = "Computer Picked: Paper";
//         break;
//     case 2:
//         comp.innerText = "Computer picked: Scissors";
//         break;

// }



// function playGame(button) {
//     const buttons = document.getElementById("button");
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove("selected");
//     }
//     button.classList.add("selected");

//     document.getElementById("playersBeat").textContent = "selected Button: " + button.textContent;
// }

   

// function 
// playRound(playerSelection) {
//     const computerSelection = computerPlay();

//     if(playerSelection === computerSelection) {
//         return;
//     } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//     ) {
//         playerScore++;
//         document.getElementById("playerScore").textContent = playerScore;
//     } else {
//         computerScore++;
//         document.getElementById("computerScore").textContent = computerScore;
//     }
// }

// function updateScores(player1, player2) {
//     if (player1) {
//         player1Score++;
//         document.getElementById("player1Score").textContent = player1Score;
//     } else if (player2) {
//         player2Score++;
//         document.getElementById("player2Score").textContent = player2Score;
//     }
// }

// updateScores(true, false);
// updateScores(false, true);
// updateScores(false, false);
// updateScores(true, true);
// updateScores(true , true);
// updateScores(false, true);
// updateScores(true, false);