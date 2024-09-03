import React from 'react';

const Controls = ({ onNewGame, onPauseToggle, gameStatus, difficulty, onDifficultyChange, timer }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="controls">
      <div className="timer">Time: {formatTime(timer)}</div>
      <button onClick={onNewGame}>New Game</button>
      <button onClick={onPauseToggle}>
        {gameStatus === 'playing' ? 'Pause' : 'Resume'}
      </button>
      <div className="difficulty-selector">
        <label htmlFor="difficulty">Difficulty:</label>
        <select 
          id="difficulty"
          value={difficulty} 
          onChange={(e) => onDifficultyChange(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {gameStatus === 'completed' && <div className="completion-message">Congratulations! You've completed the puzzle!</div>}
    </div>
  );
};

export default Controls;