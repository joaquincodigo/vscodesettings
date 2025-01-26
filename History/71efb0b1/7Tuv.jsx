import 'react' from React;
import 'Card' from 'Card';

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