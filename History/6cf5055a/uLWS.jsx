import React from 'react';

import Card from '../card/card';
import SearchBar from '../searchbar/searchbar';
import ResultsList from '../resultslist/resultslist';

import './pokemonsearch.css';

function PokemonSearch() {
  return (
    <div className="container">

      <div className="card-container">
        <Card />
      </div>

      <div className="search-container">
        <SearchBar />
        <ResultsList />
      </div>

    </div>
  );
}

export default PokemonSearch;