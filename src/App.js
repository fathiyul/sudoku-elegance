import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(createEmptyBoard());

  const handleCellChange = (row, col, newValue) => {
    const newBoard = [...board];
    newBoard[row][col] = { ...newBoard[row][col], value: newValue };
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <Board board={board} onCellChange={handleCellChange} />
    </div>
  );
};

function createEmptyBoard() {
  return Array(9).fill().map(() => 
    Array(9).fill().map(() => ({ value: '', isInitial: false }))
  );
}

export default App;