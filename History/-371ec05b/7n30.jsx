import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonLanguage = () => {

	return (
		<Button text={text} icon={icon} />
	);
};

export default ButtonLanguage;
