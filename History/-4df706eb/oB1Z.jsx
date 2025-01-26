import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonContact = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	return (
		<Button text={"yes"} />
	);
};

export default ButtonContact;
