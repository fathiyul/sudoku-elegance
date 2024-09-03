import React from 'react';
import Cell from './Cell';

const Board = ({ board, onCellChange }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              isInitial={cell.isInitial}
              onChange={(newValue) => onCellChange(rowIndex, colIndex, newValue)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;