import React from 'react'

export default function TodoEntry({ todo, index, removeTodo }) {
	return (
    <li key={index}>
      <div className='flex justify-between bg-purple-500 rounded h-10'>

       {todo} 

      <button onClick={() => removeTodo(index)}>
        <img src="/images/icons/trashcan-icon.svg" alt="Icon" className='w-4 h-4' />
      </button>
      
      </div>
    </li>
	)
}

