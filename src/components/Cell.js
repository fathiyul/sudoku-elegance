import React from 'react';

const Cell = ({ value, onChange, isInitial }) => {
  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      readOnly={isInitial}
      className={`cell ${isInitial ? 'initial' : ''}`}
    />
  );
};

export default Cell;