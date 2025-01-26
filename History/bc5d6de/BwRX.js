import ''

import SearchBar from '../searchbar/searchbar'
import ResultsList from '../resultslist/resultslist'
import Card from '../card/card'


function PokemonSearch() {
  return (
    <div className="App">
      <div className='container'>
        <SearchBar />
        <ResultsList />
        <Card />
      </div>
    </div>
  );
}

export default PokemonSearch;
