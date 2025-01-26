import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonResume = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);
	const resumeIcon = '/images/ResumeIconWhite.svg'
	const text = language === 'en' ? "Download my CV" : "Descarga mi CV"

	return (
		<div className='ButtonResume mb-5'>
			<Button text={text} icon={resumeIcon} />
		</div>
	);
};

export default ButtonResume;
