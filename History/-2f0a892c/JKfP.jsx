import React from 'react';

const ProjectEntry = ({ title, text, image }) => {

	const dummyImage = '/images/dummyProjectImage.png'

	return (
		<div className='ProjectEntry mb-4 p-3 rounded'>

			{/* // TITLE */}
			<h3 className='mb-3 fs-2'>{title}</h3>

			{/* // DESCRIPTION */}
			<p className='fs-4 mb-3'>{text}</p>

			{/* // IMAGE */}
			{/* <img className="mb-5" src="{image}" alt="Project Preview" /> */}
			<img className="mb-2 col-12 rounded" src={dummyImage} alt="Project Preview" />

		</div>
	);
};

export default ProjectEntry;
