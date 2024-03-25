
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



    function increasePlayerScore() {
        // playerScore++;
        checkScore();
    }

    function increasePlayerScore() {
        // computerScore++;
        checkScore();
    }

    function checkScore() {
        let messageElement = document.getElementById("motivate");


        if (playerScore === 10) {
            messageElement.textContent = "You're on fire! Keep it up!";
            messageElement.style.backgroundColor = "white";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "black";
            messageElement.style.borderRadius = "100px";
        } else if (playerScore === 23) {
            messageElement.textContent = "Wonderful! Your effort is paying off!";
            messageElement.style.backgroundColor = "red";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "white";
            messageElement.style.borderRadius = "90px";
        } else if (playerScore === 38) {
            messageElement.textContent = "Superb! You're making great strides!";
            messageElement.style.backgroundColor = "blue";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "white";
            messageElement.style.borderRadius = "80px";
        } else if (playerScore === 45) {
            messageElement.textContent = "Stunning! Your hard work is shining through!";
            messageElement.style.backgroundColor = "green";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "black";
            messageElement.style.borderRadius = "70px";
        } else if (playerScore === 56 ) {
            messageElement.textContent = "Incredible! You've got this!";
            messageElement.style.backgroundColor = "yellow";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "blue";
            messageElement.style.borderRadius = "60px";
        } else if (playerScore === 70) {
            messageElement.textContent = "You're doing great! Keep going!";
            messageElement.style.backgroundColor = "pink";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "brown";
            messageElement.style.borderRadius = "50px";
        } else if (playerScore === 85) {
            messageElement.textContent = "Impressive! You're breaking barrieers!";
            messageElement.style.backgroundColor = "cremson";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "white";
            messageElement.style.borderRadius = "25px";
        } else if (computerScore === 100) {
            messageElement.textContent = "Sorry! You Lost The Game!";
            messageElement.style.backgroundColor = "red";
            messageElement.style.padding = "70px 100px";
            messageElement.style.color = "white";
            messageElement.style.borderRadius = "100px";
        } else if (playerScore === 100) {
            messageElement.textContent = "Excellent! Congratulations! You won the game";
            messageElement.style.backgroundColor = "aqua";
            messageElement.style.padding = "20px 50px";
            messageElement.style.color = "blue";
            messageElement.style.borderRadius = "10px";
        }
            
    }  
    
    increasePlayerScore();


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