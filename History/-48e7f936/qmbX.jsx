import React from 'react';
import './resultsList.css'
import dummyImage from './dummy-image.png'

function ResultsList() {
	return (
		<div className="results-list">
			<ul>

				<li>
					<div className='result'>
						<img src={dummyImage} />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, tenetur.</p>
					</div>
				</li>

			</ul>
		</div>
	);
}

export default ResultsList;