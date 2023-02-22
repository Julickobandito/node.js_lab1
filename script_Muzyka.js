//перевіряє чи судоку є валідним
const validSudoku = function(){
    const prompt = require("prompt-sync")();
    var board = [];
    var row = [];
    let dim = 6;

    console.log("Enter sudoku (w/ spaces):");
    while(dim > 0){
        row = parseStrRowToInt(prompt("Row #" + (6 - dim + 1) + " | ").split(' '));
        if(row.length !== 0){
            board.push(row);
            --dim;
        }
        else{
            console.log("You enter invalid row value.");
        }
    }
    const isValid = isValidSudoku(board);
    if(isValid){
        console.log("Sudoku is valid :)");
    } 
    else{
        console.log("Sudoku is invalid :(")
    }
}

// конвертує кожен елемент масиву str -> int (крім '.')
// якщо неможливо або число не є у межах [1, 6],
// повертає пустий масив
const parseStrRowToInt = function(row){
    if(row.length !== 6){
        return [];
    }
    for(let i = 0; i < row.length; i++){
        let el = row[i];
        if(el != '.'){
            row[i] = parseInt(el);
            if(isNaN(row[i]) || row[i] > 6 || row[i] < 0){
                return [];
            }
        }
    }
    return row
}

//перевіряє чи судоку є розв'язаним
const isValidSudoku = function(board) {
    const dim = board.length;

    for(let i = 0; i < dim; i++){
        for(let j = 0; j < dim; j++){
            let el = board[i][j];
            for(let k = j + 1; k < dim; k++){
                if(Number.isInteger(el) && board[i][k] == el){
                    return false;
                }
            }
        }
    }

    for(let j = 0; j < dim; j++){
        for(let i = 0; i < dim; i++){
            let el = board[i][j];
            for(let k = i + 1; k < dim; k++){
                if(Number.isInteger(el) && board[k][j] == el){
                    return false;
                }
            }
        }
    }
    return true;
};

validSudoku();