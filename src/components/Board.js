import React from 'react';
import Cell from './Cell';

const Board = ({ board, onCellChange, onCellSelect, selectedCell }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              isInitial={cell.isInitial}
              isSelected={selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex}
              onChange={(newValue) => onCellChange(rowIndex, colIndex, newValue)}
              onSelect={() => onCellSelect(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;