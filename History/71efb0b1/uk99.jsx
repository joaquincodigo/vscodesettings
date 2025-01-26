import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

function PokemonSearch() {
  return (
    <div className="container">
      <Card />
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default PokemonSearch;