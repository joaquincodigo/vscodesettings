import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonContact = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ?
		"HELLO ENGLISh"
		:
		"HOLA ESPANOl"

	return (
		<Button text={text} />
	);
};

export default ButtonContact;
