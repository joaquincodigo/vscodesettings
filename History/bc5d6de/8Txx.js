import SearchBar from './components/searchbar/searchbar'
import ResultsList from './components/resultslist/resultslist'
import Card from './components/card/card'


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
