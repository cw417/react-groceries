import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FiX, FiEdit } from 'react-icons/fi';

export default function Grocery({ grocery, removeGrocery, updateGrocery }) {

  const [ editing, setEditing ] = useState(false)
  const [ displayNormal, setDisplayNormal ] = useState('block')
  const [ displayEdit, setDisplayEdit] = useState('none')
  const groceryAmount = useRef()
  const groceryName = useRef()

  const toggleDisplay = useCallback(() => {
  /**
   * Toggles between normal and edit mode.
   * Updates grocery info if the groceryName or groceryAmount refs change.
   */
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
  }, [editing, grocery]) 

  useEffect(() =>{
    toggleDisplay()
  }, [toggleDisplay]) 

  function handleRemoveGrocery() {
    console.log(`Removing: ${grocery.name}`)
    removeGrocery(grocery.id)
  }

  function toggleEdit() {
    setEditing(!editing)
  }

  return (
    <div className='flex flex-row'>

      <div className='flex' style={{display:displayNormal}}>
        <div  className='grocery-amount w-1/4'>{grocery.amount}</div>
        <div  className='grocery-name w-full'>{grocery.name}</div>
      </div>

      <div className='' style={{display:displayEdit}} >
        <input ref={groceryAmount}className='w-1/12 text-center my-2 ml-4 rounded-xl' type='text' placeholder={grocery.amount} />
        <input ref={groceryName} className='w-1/4 my-2 ml-8 mr-16 px-2 rounded-xl' type='text' placeholder={grocery.name} />
      </div>
        
      <div>
        <button className='btn' onClick={() => toggleEdit()}><FiEdit /></button>
        <button className='btn' onClick={() => handleRemoveGrocery()}><FiX /></button>
      </div>

    </div>
  )
}
