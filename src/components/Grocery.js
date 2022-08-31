import React from 'react'
import { FiX } from 'react-icons/fi';

export default function Grocery({ grocery }) {
  return (
    <div className='flex flex-row'>
      <div className='flex items-center text-left mx-10 '>{grocery.amount}</div>
      <div className='flex items-center w-2/6 text-left ml-6'>{grocery.name}</div>
      <div >
        <button className='btn'><FiX /></button>
        </div>
    </div>
  )
}
