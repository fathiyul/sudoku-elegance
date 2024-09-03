import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import generateSudoku from './utils/generateSudoku';
import { isValidMove, checkBoardCompletion } from './utils/sudokuUtils';
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
    const newBoard = generateSudoku(difficulty);
    setBoard(newBoard);
    setSelectedCell(null);
    setGameStatus('playing');
    setTimer(0);
  };

  const handleCellChange = (row, col, newValue) => {
    if (board[row][col].isInitial || gameStatus !== 'playing') return;
    
    const newBoard = [...board];
    newBoard[row][col] = { ...newBoard[row][col], value: newValue, isCorrect: isValidMove(newBoard, row, col, newValue) };
    setBoard(newBoard);

    if (checkBoardCompletion(newBoard)) {
      setGameStatus('completed');
    }
  };

  const handleCellSelect = (row, col) => {
    if (gameStatus === 'playing') {
      setSelectedCell({ row, col });
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
        <h1>Sudoku Elegance</h1>
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