import React, { useState, useEffect, useRef } from 'react'
import { FiX, FiEdit } from 'react-icons/fi';

export default function Grocery({ grocery, removeGrocery, updateGrocery }) {

  const [ editing, setEditing ] = useState(false)
  const [ displayNormal, setDisplayNormal ] = useState('block')
  const [ displayEdit, setDisplayEdit] = useState('none')
  const groceryAmount = useRef()
  const groceryName = useRef()

  useEffect(() =>{
  /**
   * Toggles between normal and edit mode.
   * Updates grocery info if the groceryName or groceryAmount refs change.
   */
    if(editing === false) {
      setDisplayNormal('block')
      setDisplayEdit('none')
      const amount = groceryAmount.current.value
      const name = groceryName.current.value
      updateGrocery(grocery.id, amount, name)
      // clear refs so text appears as placeholder again
      groceryAmount.current.value = null
      groceryName.current.value = null
    } else {
      setDisplayNormal('none')
      setDisplayEdit('block')
      groceryAmount.current.value = grocery.amount
      groceryName.current.value = grocery.name
    }
  }, [editing, grocery]) 

  function handleRemoveGrocery() {
    console.log(`Removing: ${grocery.name}`)
    removeGrocery(grocery.id)
  }

  function toggleEdit() {
    setEditing(!editing)
  }

  function handleKeyPress(event) {
    /**
     * Calls 'handleAddRecipe' when 'Enter' key is pressed.
     * The keycode for 'Enter' is 13.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.keyCode === 13 || event.which === 13) {
      toggleEdit()
    }
  }

  return (
    <div className='flex flex-row'>

      <div className='mr-auto md:ml-6' style={{display:displayNormal}}>
        <span className='mr-12 ml-10 md:ml-4'>{grocery.amount}</span>
        <span className='md:ml-4'>{grocery.name}</span>
      </div>

      <div className='m-auto' style={{display:displayEdit}} >
        <input ref={groceryAmount} onKeyPress={handleKeyPress} className='inpt amt mr-4' type='text' />
        <input ref={groceryName} onKeyPress={handleKeyPress} className='inpt w-1/2' type='text' />
      </div>
        
      <div className='flex flex-row'>
        <button className='btn' onClick={() => toggleEdit()}><FiEdit /></button>
        <button className='btn' onClick={() => handleRemoveGrocery()}><FiX /></button>
      </div>

    </div>
  )
}
