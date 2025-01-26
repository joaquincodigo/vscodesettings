import React from 'react';
import './card.css'
import dummyImage from './dummy-image.png'

function Card() {
	return (
		<div className="card">
			<div className="image-container">
				<img src={dummyImage} alt="Pokemon image" id="image" />
			</div>
			<div className="text-container">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt fuga corrupti recusandae veritatis tempora dolorem reprehenderit fugiat facere, unde facilis?
				<textarea className="card-text" readOnly />
			</div>
		</div>
	);
}

export default Card;