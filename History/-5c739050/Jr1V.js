import React from 'react';
import ReactDOM from 'react-dom/client';
import PokemonSearch from './components/pokemonsearch/pokemonsearch'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonSearch />
  </React.StrictMode>
);