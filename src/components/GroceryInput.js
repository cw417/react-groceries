import React, { useRef } from 'react'
import { FiPlus } from 'react-icons/fi';

export default function GroceryInput({ addGrocery }) {

  const groceryAmount = useRef()
  const groceryName = useRef()

  function handleAddGrocery() {
    const amount = groceryAmount.current.value
    const name = groceryName.current.value
    addGrocery(amount, name)
  }  

  return (
    <div>
      <input className='w-10 mx-2' ref={groceryAmount} type='text' placeholder='Amt' />
      <input ref={groceryName} type='text' placeholder='Name' />
      <button className='mx-2 p-2 bg-blue-500 hover:bg-blue-400 rounded-xl' onClick={handleAddGrocery}><FiPlus /></button>
    </div>
  )
}
