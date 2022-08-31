import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import GroceryList from './components/GroceryList';

const initialState = [
  {name: 'item 1'},
  {name: 'item 2'},
  {name: 'item 3'},
]

function App() {

  const [ groceries, setGroceries ] = useState(initialState)

  // local storage setup
  const LOCAL_STORAGE_KEY = 'groceryApp.groceries'

  // local storage setup
  useEffect(() => {
    const storedGroceries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedGroceries) setGroceries(storedGroceries)
  }, [])

  // local storage setup
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(groceries))
  }, [groceries])

  return (
    <div>
      <div>Groceries</div>
      <GroceryList
        groceries={groceries}
       />
    </div>
  );
}

export default App;
