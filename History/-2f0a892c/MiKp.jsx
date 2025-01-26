import React from 'react';

const ProjectEntry = ({ title, text, image }) => {

	const dummyImage = '/images/dummyProjectImage.png'

	return (
		<div className='ProjectEntry border p-2 rounded'>

			{/* // TITLE */}
			<h3 className='mb-4 mt-4 fs-2'>{title}</h3>

			{/* // DESCRIPTION */}
			<p className='fs-4'>{text}</p>

			{/* // IMAGE */}
			{/* <img className="mb-5" src="{image}" alt="Project Preview" /> */}
			<img className="mb-5 col-12 rounded" src={dummyImage} alt="Project Preview" />

		</div>
	);
};

export default ProjectEntry;
