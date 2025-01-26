import React from 'react'

export default function TodoEntry({ todo, index, removeTodo }) {
	return (
          <li key={index}>
            {todo} 
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
	)
}
