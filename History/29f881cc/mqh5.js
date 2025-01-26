import React from 'react'

export default function TodoEntry({ todo, index, removeTodo }) {
	return (
    <li key={index}>

       {todo} 

      <button onClick={() => removeTodo(index)}>
        <img src="/images/icons/trashcan-icon.svg" alt="Icon" className='w-4 h-4'  {
          
            
          }
        }/>
      </button>
      
    </li>
	)
}

