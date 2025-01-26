import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonContact = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ?
		"Download my Resume"
		:
		"Descarga mi CV"

	return (
		<Button text={text} />
	);
};

export default ButtonContact;
