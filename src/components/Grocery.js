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
    }
  }, [editing, grocery]) 

  function handleRemoveGrocery() {
    console.log(`Removing: ${grocery.name}`)
    removeGrocery(grocery.id)
  }

  function toggleEdit() {
    setEditing(!editing)
  }

  return (
    <div className='flex flex-row'>

      <div className='m-auto' style={{display:displayNormal}}>
          <span className='mx-12 text-left'>{grocery.amount}</span>
          <span>{grocery.name}</span>
      </div>

      <div className='m-auto' style={{display:displayEdit}} >
        <input ref={groceryAmount}className='inpt amt mr-4' type='text' placeholder={grocery.amount} />
        <input ref={groceryName} className='inpt w-[50%]' type='text' placeholder={grocery.name} />
      </div>
        
      <div className='flex flex-row'>
        <button className='btn' onClick={() => toggleEdit()}><FiEdit /></button>
        <button className='btn' onClick={() => handleRemoveGrocery()}><FiX /></button>
      </div>

    </div>
  )
}
