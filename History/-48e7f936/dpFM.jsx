import React from 'react';
import './resultsList.css'
import dummyImage from './dummy-image.png'

function ResultsList() {
	return (
		<div className="results-list">
			<ul>
				<li>
					<img src={dummyImage} />
				</li>
			</ul>
		</div>
	);
}

export default ResultsList;