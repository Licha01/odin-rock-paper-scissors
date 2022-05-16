let x = 0;
let y = 0;

function computerPlay() {
    let x = Math.random()*3;
    if (x < 1) {
        var computerSelection = "rock";
    }
    
    else if (1 < x && x < 2) {
        var computerSelection = "paper";
    }

    else {
        var computerSelection = "scissors";
    }
    return(computerSelection)
}

function playerPlay() {
    var name = prompt("Rock, Paper or Scissors?");
    var playerSelection = name.toLowerCase();
    return playerSelection;
}

function playRound() {
    var computerSelection = computerPlay()
    var playerSelection = playerPlay() 
    if (playerSelection === computerSelection) {
        console.log("Tie!");
        return 1;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 2;
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return 3;
    }
}

function game() {
    x = 0;
    y = 0;
    let i = 0;
    while (i < 5) {
        var game = playRound();
        if (game === 2) {
            x += 1;
            console.log(x);
        } 
        else if (game === 3) {
            y += 1;
            console.log(y);
        }
        i = x + y;

        if (i === 5) {
            if (x > y) {
                console.log(`Game over! Player Wins! ${x} ${y}`);
            }
            else {
                console.log(`Game over! Computer Wins! ${x} ${y}`);
            }
        }
       else {
           console.log(`------- Next round! -------`);
       }
    }

}

game();
