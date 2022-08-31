import React, { useState, useEffect } from 'react'
import { FiX, FiEdit } from 'react-icons/fi';

export default function Grocery({ grocery, removeGrocery }) {

  const [ editing, setEditing ] = useState(false)
  const [ displayNormal, setDisplayNormal ] = useState('block')
  const [ displayEdit, setDisplayEdit] = useState('none')

  useEffect(() =>{
    if(editing === false) {
      setDisplayNormal('block')
      setDisplayEdit('none')
      console.log('Editing: ' + grocery.name)
    } else {
      setDisplayNormal('none')
      setDisplayEdit('block')
      console.log('Finished editing: ' + grocery.name)
    }
  }, [editing])

  function handleRemoveGrocery() {
    console.log(`Removing: ${grocery.name}`)
    removeGrocery(grocery.id)
  }
  
  function toggleEdit() {
    setEditing(!editing)
    }

  return (
    <div className='flex flex-row'>
      <div style={{display:displayEdit}}>EDITING</div>
      
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
