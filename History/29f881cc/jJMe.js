import React from 'react'

export default function TodoEntry({ todo, index, removeTodo }) {
	return (
          <li key={index}>
            <img src="/images/icons/icon-name.png" alt="Icon" />

      <button onClick={() => removeTodo(index)}>
       _DELETE_ICON_
       </button>
          </li>
	)
}
