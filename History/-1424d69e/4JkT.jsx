import React from 'react';
import LanguageContext from './LanguageContext';


const PresentationText = () => {

	const { language } = useContext(LanguageContext);

	return (
		<div className='bg-secondary row'>

			<h1 className='text-center fs-1 imb-plex-sans-bold'>
				Portfolio
			</h1>

			<p className='text-center fs-2 ibn-plex regular'>
				{
					language === 'en' ?
						"Explore my work and projects showcasing my skills and expertise in web development."
						:
						"Explora mi trabajo y proyectos que muestran mis habilidades y experiencia en desarrollo web."
				}







			</p>

		</div>
	);
};

export default PresentationText;
