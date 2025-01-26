import React from 'react';
import './searchBar.css';

function SearchBar() {
	return (
		<div className="search-bar">
			<form action=""></form>
			<input type="text" name="name" id="name" placeholder='Enter the Pokemon name' />
			<div className="type-container">
				<input type="text" name="type" id="type" placeholder='Type Symbol' />
			</div>
		</div>
	);
}

export default SearchBar;