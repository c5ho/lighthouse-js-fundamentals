const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  const maxCols = maxRows = 8;

  for (let row = 0; row < maxRows; row++) {
    board.push([]); //board is an array of rows
    for (let col = 0; col < maxCols; col++) {
      if ((row === whiteQueen[0] && col === whiteQueen[1]) || (row === blackQueen[0] && col === blackQueen[1])) {
        board[row].push(1)
      }
      else {
        board[row].push(0); //rows is an array of columns
      }
    }

  }
  //board[0][0] = 1; can also manually add queens to the board this way
  return (board);
}

const queenThreat = function(board) {
  const maxCols = maxRows = 8;
  let queen1 = queen2 = [];
  let qThreat = false;

  //find the locations of queen1 and queen2 (regardless of colour)
  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < maxCols; col++) {
      if (board[row][col] === 1) {
        if (queen1.length === 0) {  //if queen1 hasn't been found then set found queen to be queen1
          queen1 = [row, col];  
        }
        else {
          queen2 = [row, col]; //otherwise, found queen is queen2
        }
      }
    }
  }

  //if q1 row = q2 row, they are on the same row; if q1 col = q2 col, they are on the same col; if q1 abs(row-col) = q2 abs(row-col), 
  //they are on the same diagonal as the slope either 1 or -1
  if ((queen1[0] === queen2[0]) || (queen1[1] === queen2[1]) || (Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1]))) {
    qThreat = true;
  }
  else { 
    qThreat = false;
  }
  return qThreat;
}

let whiteQueen = [4, 6];
let blackQueen = [5, 7];
generateBoard(whiteQueen, blackQueen);
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
Expected Output:
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/