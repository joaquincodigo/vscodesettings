import SearchBar from './components/searchbar/searchbar.jsx'
import ResultsList from './components/searchbar/resultslist.jsx'

function PokemonSearch() {
  return (
    <div className="App">
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default PokemonSearch;
