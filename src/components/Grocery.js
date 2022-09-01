import React, { useState, useEffect, useRef } from 'react'
import { FiX, FiEdit } from 'react-icons/fi';

export default function Grocery({ grocery, removeGrocery, updateGrocery }) {

  const [ editing, setEditing ] = useState(false)
  const [ displayNormal, setDisplayNormal ] = useState('block')
  const [ displayEdit, setDisplayEdit] = useState('none')
  const groceryAmount = useRef()
  const groceryName = useRef()

  // toggle display settings on editing change
  // update grocery info if refs change
  useEffect(() =>{
    if(editing === false) {
      setDisplayNormal('block')
      setDisplayEdit('none')
      console.log('Editing: ' + grocery.name)
      const amount = groceryAmount.current.value
      const name = groceryName.current.value
      updateGrocery(grocery.id, amount, name)
      // clear refs so text appears as placeholder again
      groceryAmount.current.value = null
      groceryName.current.value = null
    } else {
      setDisplayNormal('none')
      setDisplayEdit('block')
      console.log('Finished editing: ' + grocery.name)
    }
  }, [editing, grocery.name, grocery.amount]) 
  // eslint warning about adding updateGrocery as a dependency
  // creates infinite loop when added

  function handleRemoveGrocery() {
    console.log(`Removing: ${grocery.name}`)
    removeGrocery(grocery.id)
  }

  function toggleEdit() {
    setEditing(!editing)
  }

  return (
    <div className='flex flex-row'>

      <input ref={groceryAmount} style={{display:displayEdit}} className='w-1/12 text-center my-2 ml-4 rounded-xl' type='text' placeholder={grocery.amount} />
      <input ref={groceryName} style={{display:displayEdit}} className='w-1/4 my-2 ml-8 mr-16 px-2 rounded-xl' type='text' placeholder={grocery.name} />
      
      <div style={{display:displayNormal}} className='grocery-amount'>{grocery.amount}</div>
      <div style={{display:displayNormal}} className='grocery-name'>{grocery.name}</div>
      <div >
        <button className='btn' onClick={() => handleRemoveGrocery()}><FiX /></button>
      </div>
      <div >
        <button className='btn' onClick={() => toggleEdit()}><FiEdit /></button>
      </div>
    </div>
  )
}
