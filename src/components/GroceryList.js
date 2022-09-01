import React from 'react'
import Grocery from './Grocery';

export default function GroceryList({ groceries, removeGrocery, updateGrocery }) {
  return (
    groceries.map((grocery, index) => {
      return (
        <div key={index}>
          <Grocery 
            grocery={grocery}
            removeGrocery={removeGrocery}
            updateGrocery={updateGrocery}
          />
        </div>
      )
    })
  )
}
