import React, { useRef } from 'react'
import { FiPlus } from 'react-icons/fi';

export default function GroceryInput({ addGrocery }) {

  const groceryAmount = useRef()
  const groceryName = useRef()

  function handleAddGrocery() {
    const amount = groceryAmount.current.value
    const name = groceryName.current.value
    console.log(`Adding: ${amount} ${name}`)
    addGrocery(amount, name)
    groceryAmount.current.value = null
    groceryName.current.value = null
  }  

  return (
    <div className='flex flex-row items-center my-4'>
      <div> <input className='inpt w-20 mx-2' ref={groceryAmount} type='text' placeholder='Amt' /> </div>
      <div> <input className='inpt' ref={groceryName} type='text' placeholder='Name' /> </div>
      <div> <button className='btn' onClick={handleAddGrocery}><FiPlus /></button> </div>
    </div>
  )
}
