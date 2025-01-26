import React from 'react';
import './card.css'
import dummyImage from '../../images/dummy-image.png'

function Card({ result }) {
	return (
		<div className="card">

			{/* <p className="card-title">{result.name}</p> */}
			<p className="card-title">Placeholder</p>

			<div className="card-image-container">
				<img className="card-image" src={dummyImage} />
			</div>
			<div className="card-description-container">
				<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea commodi error amet vero ut, qui nobis tenetur cupiditate asperiores totam corporis quibusdam sapiente quis veritatis labore nisi incidunt voluptatibus.</p>
				<button className='card-button-up'>UP</button>
				<button className='card-button-down'>DOWN</button>
			</div>
		</div >
	);
}

export default Card;