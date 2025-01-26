import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const ButtonLanguage = () => {

	const { language, toggleLanguage } = useContext(LanguageContext);

	return (
		<button onClick={toggleLanguage}>
			{language === 'en' ? 'ESP' : 'ENG'}
		</button>
	);

};

export default ButtonLanguage;
