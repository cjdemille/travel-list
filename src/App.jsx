import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import { Stats } from './Stats';

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem])
  }

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id))
  };

  const handleToggleItem = (id) => {
    setItems((items) => items.map((i) => i.id === id ? { ...i, packed: !i.packed } : i))
  };

  const handleClearItems = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
  )
}






