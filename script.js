window.onload = function () {

    let playerSelection = prompt('Rock, Paper, or Scissors?')

    let rockPaperScissors = ['rock', 'paper', 'scissors']
    let computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];


    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return alert(computerSelection + ' beats ' +
            playerSelection + '. Better luck next time.')
        //need to show visuals of selections
    } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return alert(playerSelection + ' beats ' +
            computerSelection + '. You win, way to go!')
    } else {
        return alert('Both ' + playerSelection + ". It's a draw.")
    }
}