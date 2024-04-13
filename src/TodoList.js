import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, itemIndex) => index !== itemIndex);
    setItems(newItems);
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Přidat</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Odstranit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;