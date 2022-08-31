import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import GroceryList from './components/GroceryList';
import GroceryInput from './components/GroceryInput';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {id: uuidv4(), name: 'item 1', amount: '2'},
  {id: uuidv4(), name: 'item 2', amount: '2'},
  {id: uuidv4(), name: 'item 3', amount: '2'},
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

  function addGrocery(amount, name) {
    const newGrocery = {
      id: uuidv4(),
      name: name,
      amount: amount
    }
    const newGroceries = [...groceries, newGrocery]
    setGroceries(newGroceries)
  }

  return (
    <div className='flex flex-row justify-center'>
      <div className='flex flex-col text-center bg-blue-300'>
        <div className='text-3xl'>Groceries</div>
        <GroceryInput 
          addGrocery={addGrocery}
        />
        <GroceryList
          groceries={groceries}
        />
      </div>
    </div>
  );
}

export default App;
