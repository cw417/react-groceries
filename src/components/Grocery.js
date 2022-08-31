import React from 'react'
import { FiX } from 'react-icons/fi';

export default function Grocery({ grocery }) {
  return (
    <div className='flex flex-row'>
      <div className='text-left mx-6'>{grocery.amount}</div>
      <div className='w-2/6 text-left'>{grocery.name}</div>
      <div className=''>
        <button><FiX /></button>
        </div>
    </div>
  )
}
