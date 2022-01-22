window.onload = function () {

    //gameplay / algorithm
    //player selects rock, paper, or scissors
    //3 buttons. Dataset assigns each value (rock, paper, scissors).
    //Click event triggers function
    //computer randomly chooses rock, paper, or scissors
    //output result to document
    //at end of turn, record point to who won
    //first to 5 wins

    //storing variabeles for scores
    let playerScore = 0;
    let computerScore = 0;

    //storing variables for selections
    let playerSelection
    let computerSelection

    //storing variables for html elements
    const resultText = document.getElementById('result-text');
    const playerScoreEl = document.getElementById('player-score');
    const computerScoreEl = document.getElementById('computer-score');


    //button elements with click events. These trigger the gameTurn function.
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', gameTurn)
    }

    let disableBtns = function () {
        buttons.preventDefault();
    }

    const resetGame = function () {
        //reset scores to 0
        computerScore = 0;
        playerScore = 0;
        computerScoreEl.innerHTML = computerScore;
        playerScoreEl.innerHTML = playerScore;

        //reset inner html to 0
        resultText.innerHTML = ""

        //reset top text
        document.getElementById('result-text').innerHTML = "Choose Rock Paper or Scissors 👇";

        //btns clickable again
        document.getElementById('rps-btns').style.pointerEvents = "auto";

        //btns reset color
        const buttons = document.querySelectorAll('.button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "blue";
        }
    }

    //button for reset game
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', resetGame)

    playerScoreEl.innerHTML = 0;
    computerScoreEl.innerHTML = 0;

    function gameTurn(playerSelection, computerSelection) {

        playerSelection = (this.dataset.name)

        let rockPaperScissors = ['rock', 'paper', 'scissors']
        computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

        if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'rock'
        ) {
            resultText.innerHTML = computerSelection + ' beats ' + playerSelection + '. Better luck next time 🙀'
            computerScore++;
            computerScoreEl.innerHTML = computerScore;
        }
        if (playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'paper'
        ) {
            resultText.innerHTML = playerSelection + ' beats ' + computerSelection + '. You win, way to go! 😺'
            playerScore++;
            playerScoreEl.innerHTML = playerScore;
        }
        if (playerSelection === computerSelection) {
            resultText.innerHTML = 'Both chose ' + playerSelection + ". It's a draw 😽"
        }
        if (computerScore === 5 || playerScore === 5) {
            if (computerScore === 5) {
                resultText.innerHTML = 'Game Over! Computer Wins 💻';
            }
            if (playerScore === 5) {
                resultText.innerHTML = 'You win! 🎉'
            }
            document.getElementById('rps-btns').style.pointerEvents = "none";
            const buttons = document.querySelectorAll('.button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "grey";
            }
        }
        console.log(playerSelection, playerScore, computerSelection, computerScore)
    }
}