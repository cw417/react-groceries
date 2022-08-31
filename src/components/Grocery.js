import React, { useState } from 'react'
import { FiX, FiEdit } from 'react-icons/fi';

export default function Grocery({ grocery, removeGrocery }) {

  const [ editing, setEditing ] = useState(false)

  function toggleEditing() {
    console.log(`Toggling 'editing' from ${editing} to ${!editing}`)
    editing = !editing
  }
  
  function handleRemoveGrocery() {
    console.log(`Removing: ${grocery.name}`)
    removeGrocery(grocery.id)
  }

  return (
    <div className='flex flex-row'>
      <div className='flex items-center text-left mx-10 '>{grocery.amount}</div>
      <div className='flex items-center w-2/6 text-left ml-6'>{grocery.name}</div>
      <div >
        <button className='btn' onClick={() => handleRemoveGrocery()}><FiX /></button>
      </div>
      <div >
        <button className='btn' onClick={() => handleRemoveGrocery()}><FiEdit /></button>
      </div>
    </div>
  )
}
