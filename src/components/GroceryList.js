import React from 'react'

export default function GroceryList({ groceries }) {
  return (
    groceries.map((grocery, index) => {
      return (
        <div key={index}>
          {grocery.amount} {grocery.name}
        </div>
      )
    })
  )
}
