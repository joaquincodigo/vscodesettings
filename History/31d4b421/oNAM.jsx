import React from 'react';
import './searchBar.css';

function SearchBar() {
	return (
		<div className="search-bar">
			<input type="text" name="name" id="name" placeholder='Enter the Pokemon name' />
		</div>
	);
}

export default SearchBar;