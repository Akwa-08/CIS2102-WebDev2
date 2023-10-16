import React, { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import DisplayList from './components/DisplayList';
import ClearList from './components/ClearList';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('data');

    if (storedData) {
      setItems(JSON.parse(storedData));
    } else {
      const networkCall = async () => {
        try {
          const result = await fetch("https://jsonplaceholder.typicode.com/albums");
          const parsedData = await result.json();
          setItems(parsedData);
          localStorage.setItem('data', JSON.stringify(parsedData));
        } catch (error) {
          console.error("Error:", error);
          setShowError(true);
        }
      };
      networkCall();
    }
  }, []);

  const addItem = (item) => {
    const userId = items.length ? items[items.length - 1].userId + 1 : 1;
    const myNewItem = { userId, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    updateLocalStorage(listItems);
  };

  const updateItem = (userId, updatedItem) => {
    const updatedItems = items.map((item) =>
      item.userId === userId ? { ...item, item: updatedItem } : item
    );
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const deleteItem = (userId) => {
    const updatedItems = items.filter((item) => item.userId !== userId);
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <DisplayList
        items={items}
        handleUpdate={updateItem} 
        handleDelete={deleteItem} 
      />
      <ClearList handleClear={() => setItems([])} />
    </div>
  );
}

export default App;
