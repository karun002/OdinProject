// Random integer between 0 and input
function rand(max) {
    return Math.floor(Math.random() * max);
}

// Compare player entry and computer choice
function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let random_index = rand(choices.length);
    return choices[random_index]

}

// Compare player entry and computer choice
function playRound(player_choice) {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let playerChoice = player_choice.toUpperCase();
    let compChoice = computerPlay();
    let logString;
    const Invalid = 0;
    const Player = 1;
    const Computer = 2;

        switch (playerChoice) {
            case "ROCK":
                // Paper beats Rock
                if (compChoice.localeCompare("PAPER")) {
                    winner = Computer;
                }
                // Rock beats Scissors
                else { winner = Player; }
                break;
            case "PAPER":
                // Scissors beats Paper
                if (compChoice.localeCompare("SCISSORS")) {
                    winner = Computer;
                }
                // Paper beats Rock
                else { winner = Player; }
                break;
            case "SCISSORS":
                // Scissors beats Paper
                if (compChoice.localeCompare("SCISSORS")) {
                    winner = Computer; 
                }
                // Paper beats Rock
                else { winner = Player;}
                break;
            default:
                winner = Invalid;
                break;
        }
    // Build output string
    if (winner != Invalid) {
        if (winner === Player) {
            logString = "You Win! " + playerChoice.toLowerCase() + " beats " + compChoice.toLowerCase();
        }
        else {logString = "You Lose! " + compChoice.toLowerCase() + " beats " + playerChoice.toLowerCase(); }
    }
    else {logString = "Invalid Inputs!!"; }
    // Print to Console
    console.log(logString);

    return winner
}

function game(win_count) {
    let PLAYER = 1;
    let COMPUTER = 2;
    let player_wins = 0;
    let computer_wins = 0;
    let winner;
    while ((player_wins < win_count) && (computer_wins < win_count)) {
        const input = prompt("Choose Rock, Paper or Scissors: ");
        winner = playRound(input);
        if (winner == PLAYER) { player_wins++; }
        else if (winner == COMPUTER) { computer_wins++; }
        console.log("SCORE -- Player: " + player_wins + ", Computer: " + computer_wins)
    }
    console.log()
}

game(5)