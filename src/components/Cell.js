import React from 'react';

const Cell = ({ value, onChange, onSelect, isInitial, isSelected, disabled }) => {
  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onClick={onSelect}
      readOnly={isInitial || disabled}
      className={`cell ${isInitial ? 'initial' : ''} ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
    />
  );
};

export default Cell;