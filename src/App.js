import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import generateSudoku from './utils/generateSudoku';
import isValidMove from './utils/isValidMove';
import './App.css';

const App = () => {
  const [board, setBoard] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [gameStatus, setGameStatus] = useState('playing');
  const [difficulty, setDifficulty] = useState('medium');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    let interval;
    if (gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  const newGame = () => {
    setBoard(generateSudoku(difficulty));
    setSelectedCell(null);
    setGameStatus('playing');
    setTimer(0);
  };

  const handleCellChange = (row, col, newValue) => {
    if (board[row][col].isInitial || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    if (newValue === '' || isValidMove(board, row, col, newValue)) {
      newBoard[row][col] = { ...newBoard[row][col], value: newValue };
      setBoard(newBoard);
      checkCompletion(newBoard);
    }
  };

  const handleCellSelect = (row, col) => {
    if (gameStatus === 'playing') {
      setSelectedCell({ row, col });
    }
  };

  const checkCompletion = (currentBoard) => {
    const isCompleted = currentBoard.every(row => 
      row.every(cell => cell.value !== '' && cell.value !== '0')
    );
    if (isCompleted) {
      setGameStatus('completed');
    }
  };

  const togglePause = () => {
    setGameStatus(prevStatus => prevStatus === 'playing' ? 'paused' : 'playing');
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    newGame();
  };

  return (
    <div className="App">
      <div className="decorative-header">
        <div className="header-ornament left"></div>
        <h1>Sudoku</h1>
        <div className="header-ornament right"></div>
      </div>
      <div className="game-container">
        <Board 
          board={board} 
          onCellChange={handleCellChange} 
          onCellSelect={handleCellSelect}
          selectedCell={selectedCell}
          gameStatus={gameStatus}
        />
        <Controls 
          onNewGame={newGame}
          onPauseToggle={togglePause}
          gameStatus={gameStatus}
          difficulty={difficulty}
          onDifficultyChange={handleDifficultyChange}
          timer={timer}
        />
      </div>
    </div>
  );
};

export default App;