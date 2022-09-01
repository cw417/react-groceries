import React, { useRef } from 'react'
import { FiPlus } from 'react-icons/fi';

export default function GroceryInput({ addGrocery }) {

  const groceryAmount = useRef()
  const groceryName = useRef()

  function handleAddGrocery() {
    const amount = groceryAmount.current.value
    const name = groceryName.current.value
    if (name === '') return
    console.log(`Adding: ${amount} ${name}`)
    addGrocery(amount, name)
    groceryAmount.current.value = null
    groceryName.current.value = null
  }  
  
  function handleKeyPress(event) {
    /**
     * Calls 'handleAddRecipe' when 'Enter' key is pressed.
     * The keycode for 'Enter' is 13.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.keyCode === 13 || event.which === 13) {
      handleAddGrocery()
    }
  }

  return (
    <div className='flex justify-center m-4'>
      <div className='flex justify-end mr-4 w-1/4'> 
        <input className='inpt amt' ref={groceryAmount} onKeyPress={handleKeyPress} type='text' placeholder='Amt' /> 
      </div>
      <div className=''>
         <input className='inpt' ref={groceryName} onKeyPress={handleKeyPress} type='text' placeholder='Name' />
        </div>
      <div>
         <button className='btn' onClick={handleAddGrocery}><FiPlus /></button>
        </div>
    </div>
  )
}
