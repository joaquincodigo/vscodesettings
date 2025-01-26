import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';
import Button from './Button'

const ButtonLanguage = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = 'language'
	const icon = 'X'

	return (
		<Button text={text} icon={icon} />
	);
};

export default ButtonLanguage;
