import './App.css';
import React, { useState, useEffect } from 'react'
import GroceryList from './components/GroceryList';
import GroceryInput from './components/GroceryInput';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {id: uuidv4(), name: 'tomatoes', amount: '4'},
  {id: uuidv4(), name: 'potatoes', amount: '2'},
  {id: uuidv4(), name: 'bread', amount: '1'},
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
    /**
     * Creates a new grocery object and adds it to the groceries array.
     * @param {String} amount    Amount of grocery item.
     * @param {String} name      Name of grocery item.
     */
    const newGrocery = {
      id: uuidv4(),
      name: name,
      amount: amount
    }
    const newGroceries = [...groceries, newGrocery]
    setGroceries(newGroceries)
  }

  function removeGrocery(id) {
    /**
     * Removes a grocery from the groceries array based on id.
     * @param {String} id    UUID of the grocery.
     */
    const newGroceries = groceries.filter(grocery => grocery.id !== id)
    setGroceries(newGroceries)
  }

  function updateGrocery(id, amount, name) {
    /**
     * Updates the name or quantity of an item.
     * @param {String} id        UUID of grocery.
     * @param {String} amount    Amount of item.
     * @param {String} name      Name of item.
     */
    const newGroceries = [...groceries]
    const grocery = newGroceries.find(grocery => grocery.id === id)
    if (name !== '') { grocery.name = name }
    if (amount !== '') { grocery.amount = amount }
    setGroceries(newGroceries)
  }

  return (
    <div className='flex flex-row justify-center m-10'>
      <div className='flex flex-col text-center bg-blue-300 p-10 rounded-xl w-full'>
        <div className='flex flex-col w-3/4 m-auto'>
          <div className='text-3xl'>Groceries</div>
          <GroceryInput 
            addGrocery={addGrocery}
          />
          <GroceryList
            groceries={groceries}
            removeGrocery={removeGrocery}
            updateGrocery={updateGrocery}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
