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
						<div className="result-text-container">
							<p className="name">Pokemon Name</p>
							<p className="description">Pokemon Name</p>
						</div>
					</div>
				</li>

			</ul>
		</div>
	);
}

export default ResultsList;