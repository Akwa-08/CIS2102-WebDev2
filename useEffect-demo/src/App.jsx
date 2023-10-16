import { useEffect, useState } from 'react'
import AddItem from './components/AddItem'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    
    
    // network call using promises
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => {
        setItems(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
    

    // network call using async/await
    const networkCall = async () => {
      try {
        const result = await fetch("https://jsonplaceholder.typicode.com/albums")
        const parsedData = await result.json()
        setItems(parsedData)
      }catch(error){
        co.log("Error:", error);
        setShowError(true)
      }
    }
    networkCall()
  }, [])


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const userId = items.length ? items[items.length - 1].userId + 1 : 1;
    const myNewItem = { userId, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      {console.log(items)}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App
