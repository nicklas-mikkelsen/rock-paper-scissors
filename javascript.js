const gameButtons = document.querySelectorAll('[data-selection]')
const computerScore = document.querySelector('.computerScore')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const GAMERULES = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]



gameButtons.forEach(gameButton => {
    gameButton.addEventListener('click', e => {
        const buttonName = gameButton.dataset.selection
        const selection = GAMERULES.find(selection => selection.name === buttonName)
        game(selection)
    })
})

function game(playerSelection) {
    const computerSelection = computerGenerator();
    const playerWins = isWinner(playerSelection, computerSelection)
    const computerWins = isWinner(computerSelection, playerSelection)
    
    result(computerSelection, computerWins)
    result(playerSelection, playerWins)

    if (playerWins) increaseScore(yourScoreSpan)
    if (computerWins) increaseScore(computerScoreSpan)
}

function increaseScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function result(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('scoreOutput')
    if (winner) div.classList.add('winner');
    computerScore.after(div);
}

function isWinner(playerSelection, computerSelection) {
    return playerSelection.beats === computerSelection.name;
}

function computerGenerator() {
    const randomSelection = Math.floor(Math.random() * GAMERULES.length);
    return GAMERULES[randomSelection];
}
