import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('white');

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {['red', 'blue', 'green', 'yellow'].map(color => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              margin: '5px',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
      <p>Vybraná barva: {selectedColor}</p>
    </div>
  );
}

export default ColorPicker;