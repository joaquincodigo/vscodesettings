import React from 'react';

import Card from './Card';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

import './pokemonSearch.css';

function PokemonSearch() {
  return (
    <div className="container">
      <div className="card-container">
        <Card />
      </div>
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default PokemonSearch;