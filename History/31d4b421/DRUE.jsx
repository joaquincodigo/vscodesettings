import React from 'react';
import './searchBar.css';

function SearchBar() {
	return (
		<div className="search-bar">
			<input type="text" name="name" id="name" placeholder='Enter the Pokemon name' />
			<input type="text" name="type" id="type" placeholder='Type Sybol' />
		</div>
	);
}

export default SearchBar;