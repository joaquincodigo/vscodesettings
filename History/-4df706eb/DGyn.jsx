import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonContact = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ?
		"Contact Me"
		:
		"Contáctame"

	return (
		<Button text={text} />
	);
};

export default ButtonContact;
