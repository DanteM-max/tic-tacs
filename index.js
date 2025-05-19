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
let places = ['-','-','-','-','-','-','-','-','-']; // This is the tic-tac-toe board
let isGameOver = false;
console.log("The board is arranged as follows:")
console.log([1,2,3])
console.log([4,5,6])
console.log([7,8,9])
for (let i = 0; i < places.length; i++) {
    displayBoard();
    if (i % 2 == 0) {
        playerOneMove = parseInt(prompt("What spot do you place an X at, playerOne? "));
        if (places[(playerOneMove - 1)] != 'x' &&  places[(playerOneMove - 1) ] != 'o' && (0 < playerOneMove < 10)) {
            places[(playerOneMove - 1)] = 'x';
        } else {
            console.log("Unwarranted move. Seems like this position is not available. ");
            i--;
        }
        
    } else {
         playerTwoMove = parseInt(prompt("What spot do you place an O at, playerTwo? "));
        if (places[(playerTwoMove - 1)] != 'x' &&  places[(playerTwoMove - 1)] != 'o' && (0 < playerTwoMove < 10)) {
            places[(playerTwoMove - 1)] = 'o';
        } else {
            console.log("Unwarranted move. Seems like this position is not available. ");
            i--;
        }
    }
    displayBoard();
    isGameOver = checkGameOver("x") || checkGameOver("o");
    if (isGameOver) {
        break;
    }
}

function displayBoard() {
    let row1 = [places[0], places[1], places[2]], row2 = [places[3], places[4], places[5]], row3 = [places[6], places[7], places[8]];
    // It just looks cool
    console.log("---------------------------");
    console.log(row1[0] + "|" + row1[1] + "|" + row1[2]);
    console.log("-----")
    console.log(row2[0] + "|" + row2[1] + "|" + row2[2]);
    console.log("-----")
    console.log(row3[0] + "|" + row3[1] + "|" + row3[2]);
    console.log("---------------------------");
}

function checkGameOver(player) {
    let row1 = [places[0], places[1], places[2]], row2 = [places[3], places[4], places[5]], row3 = [places[6], places[7], places[8]];
    let col1 = [places[0], places[3], places[6]], col2 = [places[1], places[4], places[7]], col3 = [places[2], places[5], places[8]];
    let diag1 = [places[0], places[4], places[8]], diag2 = [places[2], places[4], places[6]]
    let rowCheck = player + player + player;
    let rowString = "";
    // Check each row 
    for (let move of row1) {
        if (move == player) {
            rowString = rowString + player;
        }
    }
    if (rowString == rowCheck) {
        console.log(player + " WINS!!!!!!")
        return true
    }
    rowString = "";
    for (let move of row2) {
        if (move == player) {
            rowString = rowString + player;
        }
    }
    if (rowString == rowCheck) {
        console.log(player + " WINS!!!!!!")
        return true
    }
    rowString = "";
    for (let move of row3) {
        if (move == player) {
            rowString = rowString + player;
        }
    }
    if (rowString == rowCheck) {
        console.log(player + " WINS!!!!!!")
        return true
    }
    // Check each col
    let colCheck = player + player + player;
    let colString = "";
    for (let move of col1) {
        if (move == player) {
            colString = colString + player;
        }
        if (colString == colCheck) {
            console.log(player + " WINS!!!!")
            return true
        }
    }
    colString = "";
    for (let move of col2) {
        if (move == player) {
            colString = colString + player;
        }
        if (colString == colCheck) {
            console.log(player + " WINS!!!!")
            return true
        }
    }
    colString = "";
    for (let move of col3) {
        if (move == player) {
            colString = colString + player;
        }
        if (colString == colCheck) {
            console.log(player + " WINS!!!!")
            return true
        }
    }
    // Check each diag
    let diagCheck = player + player + player;
    diagString = "";
    for (let move of diag1) {
        if (move == player) {
            diagString = diagString + player;
        }
        if (diagString == diagCheck) {
            console.log(player + " WINS!!!!")
            return true
        }
    }

    diagString = "";
    for (let move of diag2) {
        if (move == player) {
            diagString = diagString + player;
        }
        if (diagString == diagCheck) {
            console.log(player + " WINS!!!!")
            return true
        }
    }
    // Check if all places have been used
    
    if (!places.includes('-')) {
        console.log("Hmm... Seems like this is a draw...")
        return true
    }
}

/*
    -1 1 2
    3 4 5
    6 7 8

    Winning moves are 2,12,21,8,12,15,11,12
*/

//add a space after the question mark for each player question
