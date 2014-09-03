//Optional: Using if, else if, and else blocks, write a program which allows two users to each input their moves in "Rock, Paper, Scissors" and which determines the winner (or if a tie occurred).

var player1 = prompt("Player 1, do you choose rock, paper or scissors?");
var player2 = prompt("Player 2, do you choose rock, paper or scissors?");

var compare = function(choice1, choice2) {
    if(choice1 == choice2){
        return "The result is a tie!";
    } else if(choice1 == "rock"){
        if(choice2 == "scissors"){
            return "Player 1 wins";
        } else if (choice2 == "paper"){
            return "Player 2 wins";
        };
    } else if (choice1 == "paper"){
        if(choice2 == "rock"){
            return "Player 1 wins";
        } else if (choice2 == "scissors"){
            return "Player 2 wins";
        };
    } else if (choice1 == "scissors"){
        if (choice2 == "rock"){
            return "Player 2 wins";
        } else if (choice2 == "paper"){
            return "Player 1 wins";
        };
    };
};

alert(compare(player1, player2));