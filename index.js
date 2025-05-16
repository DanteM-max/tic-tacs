const prompt = require('prompt-sync')();

/*
Set Up the Board:
Create a 3x3 array (or a single array of length 9) to represent the game board.
Initialize the board with empty values.
Display the Board:
Create a function to display the current state of the board in the console.
Get Player Input:
Get the row and column of the player's move.
Convert these coordinates to the corresponding index in the array.
Validate Input:
Check if the entered coordinates are valid.
Check if the selected square is empty.
Update the Board:
IF the move is valid:
Update the board array with the player's symbol (X or O).
Switch to the other player's turn.
Check for a Winner:
Create a function to check all possible winning conditions (rows, columns, diagonals).
Use a W3Schools JS For LoopLinks to an external site. or a W3Schools JS While LoopLinks to an external site. loop.
Check for a Tie:
IF all squares are filled and no winner is found, declare a tie.
Game Over:
End the game when there is a winner or a tie.
Play Again (Optional):
Ask the players if they want to play again.
Suggestion: Create a function called checkGameOver() to encapsulate the logic for steps 6 and 7. 
This function can be called after each move to determine if the game has ended.
*/
let playerOneMove = -1, playerTwoMove = -1; // This makes sure that players One and Two don't have any moves already
let places = ["","","","","","","","",""]; // This is the tic-tac-toe board
let isGameOver = false
for (let i = 0; i < places.length; i++) {
    displayBoard();
    if (i % 2 == 0) {
        playerOneMove = parseInt(prompt("What spot do you place an X at, playerOne?"));
        if (places[(playerOneMove - 1)] != "x" &&  places[(playerOneMove - 1) ] != "o" && (0 < playerOneMove < 10)) {
            places[(playerOneMove - 1)] = "x";
        } else {
            console.log("Unwarranted move. Seems like this position is not available. ")
            i--
        }
        
    } else {
         playerTwoMove = parseInt(prompt("What spot do you place an O at, playerTwo?"));
        if (places[(playerTwoMove - 1)] != "x" &&  places[(playerTwoMove - 1)] != "o" && (0 < playerTwoMove < 10)) {
            places[(playerTwoMove - 1)] = "o";
        } else {
            console.log("Unwarranted move. Seems like this position is not available. ")
            i--
        }
    }
    displayBoard();
    isGameOver = checkGameOver();
    if (isGameOver) {
        console.log((winning));
        break
    }
}

function displayBoard() {
    let col1 = [places[0], places[1], places[2]], col2 = [places[3], places[4], places[5]], col3 = [places[6], places[7], places[8]];
    // It just looks cool
    console.log("---------------------------");
    console.log(col1);
    console.log(col2);
    console.log(col3);
    console.log("---------------------------");
}

function checkGameOver() {
    let win = [3,11,21,9,12,15]
    console.log(win)
    let position = 0
    console.log()
    let total1 = 0
    let total2 = 0
    let i = 0
    for (let move of places) {
        position = i
        if (move == "x") {
            total1 += position;
        } else if (move == "o") {
            total2 += position;
        }

        for (let condition of win) {
            if (total1 == condition) {
                let winning = "Player One Wins!!" 
                return true
            } else if (total2 == condition) {
                let winning = "Player Two Wins!!"
                return true
            }
        }
    }
}

/*
    0 1 2
    3 4 5
    6 7 8

    Winning moves are 012, 345, 678, 036, 147, 258, 048, 246
*/