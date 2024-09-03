import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import generateSudoku from './utils/generateSudoku';
import isValidMove from './utils/isValidMove';
import './App.css';

const App = () => {
  const [board, setBoard] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    setBoard(generateSudoku());
    setSelectedCell(null);
  };

  const handleCellChange = (row, col, newValue) => {
    if (board[row][col].isInitial) return;
    
    const newBoard = [...board];
    if (newValue === '' || isValidMove(board, row, col, newValue)) {
      newBoard[row][col] = { ...newBoard[row][col], value: newValue };
      setBoard(newBoard);
    }
  };

  const handleCellSelect = (row, col) => {
    setSelectedCell({ row, col });
  };

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className="game-container">
        <Board 
          board={board} 
          onCellChange={handleCellChange} 
          onCellSelect={handleCellSelect}
          selectedCell={selectedCell}
        />
        <div className="game-controls">
          <button onClick={newGame}>New Game</button>
        </div>
      </div>
    </div>
  );
};

export default App;