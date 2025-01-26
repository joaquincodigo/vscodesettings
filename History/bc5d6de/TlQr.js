import SearchBar from './components/searchbar/searchbar'
import ResultsList from './components/resultslist/resultslist'
import Card from './components/card/card'


function PokemonSearch() {
  return (
    <div className="App">
      <SearchBar />
      <ResultsList />
      <Card />
    </div>
  );
}

export default PokemonSearch;
