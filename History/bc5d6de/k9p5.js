import SearchBar from './components/searchbar/searchbar'
import ResultsList from './components/resultslist/resultslist'

function PokemonSearch() {
  return (
    <div className="App">
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default PokemonSearch;
