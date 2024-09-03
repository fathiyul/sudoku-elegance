export const isValidMove = (board, row, col, num) => {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (board[row][x].value === num && x !== col) {
      return false;
    }
  }

  // Check column
  for (let x = 0; x < 9; x++) {
    if (board[x][col].value === num && x !== row) {
      return false;
    }
  }

  // Check 3x3 box
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j].value === num && (boxRow + i !== row || boxCol + j !== col)) {
        return false;
      }
    }
  }

  return true;
};

export const checkBoardCompletion = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!board[i][j].value || !board[i][j].isCorrect) {
        return false;
      }
    }
  }
  return true;
};