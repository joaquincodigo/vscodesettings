import 'react' from React;
import 'Card' from 'Card';

function Card() {
  return (
    <div className="container">
      <Card />
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default Card;