import React from 'react';
import dummyIage from './dummy-image.png'

function Card() {
	return (
		<div className="card">
			<div className="image-container">
				<img src={dummyIage} alt="Pokemon image" />
			</div>
			<div className="text-container">
				<textarea className="card-text" readOnly />
			</div>
		</div>
	);
}

export default Card;