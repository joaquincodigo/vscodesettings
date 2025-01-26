import 'react' from React;

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