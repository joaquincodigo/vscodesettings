import React from 'react';

function Card() {
	return (
		<div className="card">
			<div className="image-container">
				<img src="./dummy-image.png" alt="Pokemon image" />
			</div>
			<div className="text-container">
				<textarea className="card-text" readOnly />
			</div>
		</div>
	);
}

export default Card;