import React from 'react';
import './card.css'
import dummyImage from '../../images/dummy-image.png'

function Card({ result }) {
	return (
		<div className="card">

			{/* <p className="card-title">{result.name}</p> */}
			<p className="card-title">Placeholder</p>
			<img className="card-image" src={dummyImage} />
			<p className="card-description">{result.description}</p>
		</div >
	);
}

export default Card;