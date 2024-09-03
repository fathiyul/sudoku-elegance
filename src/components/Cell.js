import React from 'react';

const Cell = ({ value, onChange, onSelect, isInitial, isSelected, isCorrect, disabled }) => {
  const cellClass = `cell 
    ${isInitial ? 'initial' : ''} 
    ${isSelected ? 'selected' : ''} 
    ${disabled ? 'disabled' : ''} 
    ${!isInitial && value && !isCorrect ? 'incorrect' : ''}`;

  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onClick={onSelect}
      readOnly={isInitial || disabled}
      className={cellClass}
    />
  );
};

export default Cell;