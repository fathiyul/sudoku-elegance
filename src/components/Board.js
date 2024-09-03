import React from 'react';
import Cell from './Cell';

const Board = ({ board, onCellChange, onCellSelect, selectedCell, gameStatus }) => {
  return (
    <div className={`board ${gameStatus}`}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              isInitial={cell.isInitial}
              isCorrect={cell.isCorrect}
              isSelected={selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex}
              onChange={(newValue) => onCellChange(rowIndex, colIndex, newValue)}
              onSelect={() => onCellSelect(rowIndex, colIndex)}
              disabled={gameStatus !== 'playing'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;