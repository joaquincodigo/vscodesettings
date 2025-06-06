import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

const PresentationText = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ?
		"Explore my work and projects showcasing my skills and expertise in web development."
		:
		"Explora mis proyectos que demuestran mis habilidades en desarrollo web."

	return (
		<div className='row'>

			<h1 className='mt-1 mb-2 text-center fs-1 imb-plex-sans-bold'>
				Portfolio
			</h1>

			<p className='text-center mb-5 fs-2 ibn-plex regular col-11 mx-auto'>
				{text}
			</p>
		</div>
	);
};

export default PresentationText;






