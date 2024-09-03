function isValidMove(board, row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (board[row][i].value === num && i !== col) return false;
    }
  
    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col].value === num && i !== row) return false;
    }
  
    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j].value === num && (boxRow + i !== row || boxCol + j !== col)) return false;
      }
    }
  
    return true;
  }
  
  export default isValidMove;