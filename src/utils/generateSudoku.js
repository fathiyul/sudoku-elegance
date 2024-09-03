function generateSudoku() {
    const board = Array(9).fill().map(() => Array(9).fill(0));
  
    function isValid(num, row, col) {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) return false;
      }
  
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[boxRow + i][boxCol + j] === num) return false;
        }
      }
  
      return true;
    }
  
    function solve(row = 0, col = 0) {
      if (col === 9) {
        row++;
        col = 0;
      }
      if (row === 9) return true;
  
      if (board[row][col] !== 0) return solve(row, col + 1);
  
      for (let num = 1; num <= 9; num++) {
        if (isValid(num, row, col)) {
          board[row][col] = num;
          if (solve(row, col + 1)) return true;
          board[row][col] = 0;
        }
      }
  
      return false;
    }
  
    function removeNumbers() {
      const difficulty = 40; // Number of cells to remove
      let removed = 0;
      while (removed < difficulty) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
          board[row][col] = 0;
          removed++;
        }
      }
    }
  
    solve();
    removeNumbers();
  
    return board.map(row => row.map(cell => ({
      value: cell === 0 ? '' : cell.toString(),
      isInitial: cell !== 0
    })));
  }
  
  export default generateSudoku;