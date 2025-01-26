import React from 'react'

export default function TodoEntry({ todo, index, removeTodo }) {
	return (
    <li key={index}>
      <div className='flex justify-between items-center bg-purple-500 rounded h-10 px-5 mb-5'>

       {todo} 

      <button className="rounded-full bg-red-500 w-5 h-5" onClick={() => removeTodo(index)}>
        <img src="/images/icons/trashcan-icon.svg" alt="Icon" className='w-4 h-4' />
      </button>
      
      </div>
    </li>
	)
}

