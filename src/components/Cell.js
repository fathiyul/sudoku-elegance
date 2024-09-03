import React from 'react';

const Cell = ({ value, onChange, onSelect, isInitial, isSelected }) => {
  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onClick={onSelect}
      readOnly={isInitial}
      className={`cell ${isInitial ? 'initial' : ''} ${isSelected ? 'selected' : ''}`}
    />
  );
};

export default Cell;