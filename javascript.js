// //1. User needs to pick rock, paper or scissor(not case-sensitive) - remember to give error if not rock/paper/scissor
// //2. submit answer with document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
// //    if (e.key === 'Enter') {
// //3. computer picks random between the two remaining
// //4. game plays 
// //5. announce winner
// //6. if tie = replay game
// //7. play again

// //getComputerChoice

// const rock = 'rock'
// const paper = 'paper'
// const scissor = 'scissor'
// const gamePick = document.querySelector('.gamePick')
// const gameInput = document.querySelector('.gameInput')
// const gameComputer = document.querySelector('.gameComputer')
// const gameOutcome = document.querySelector('.gameOutcome')


// function playerSelection() {
//     const playerChoice = gamePick.toLowerCase().value;
    
//     console.log(playerChoice);
// }

// function getComputerChoice 

// gameInput.addEventListener('click', playRound)

// function playRound() {

// }
// // const gamePick = gamePickInput.toLowerCase(); - skal i en funktion
// // console.log(gamePick);


// // let gamePick = document.querySelector('.game-pick').addEventListener('keypress', function (e) {
// //     if (e.key === 'Enter') {
// //         console.log(gamePick)
// //     }
// // });



//1. player picks
//2. computer picks
//3. play round 
//4. keep playing

//1. 
let playerWeapon;
function getPlayerWeapon() {
    playerWeapon = prompt("Enter your weapon: ");
    return playerWeapon;
    
};

//2.
const weapons = ["rock", "paper", "scissors"];
let computerWeapon;

function getComputerWeapon() {
    computerWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    return computerWeapon;
};

//3.

let playerScore = 0;
let computerScore = 0;
function playRound() {
    getPlayerWeapon();
    getComputerWeapon();
    //playerWeapon = playerWeapon.toLowerCase();
    if (playerWeapon === computerWeapon) {
        return("It's a tie!");
    } if (
        playerWeapon === "rock" && computerWeapon === "scissors" ||
        playerWeapon === "scissors" && computerWeapon === "paper" ||
        playerWeapon === "paper" && computerWeapon === "rock"
    ) {
        playerScore++;
        return("You've won!")
    } if (
        playerWeapon === "rock" && computerWeapon === "paper" ||
        playerWeapon === "scissors" && computerWeapon === "rock" ||
        playerWeapon === "paper" && computerWeapon === "scissors"
    ) {
        computerScore++;
        return("Computer won!")
    }
};

//4.

function game() {
    do {
        playRound();
        console.log("Score is \nYou: " + playerScore + " - " + "Computer: " + computerScore);
    }
    while (playerScore < 5 && computerScore < 5);
}

// function game() {
//     playRound();
//     if (playerScore < 5) {
//         console.log("Score is \nYou: " + playerScore + " - " + "Computer: " + computerScore);
//         playRound();
//     } else if (computerScore < 5) {
//         console.log("Score is: \nYou: " + playerScore + " - " + "Computer: " + computerScore);
//         playRound();
//     } else {
//         conolse.log("the game is over");
//     }

// }