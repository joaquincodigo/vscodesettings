import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const ButtonLanguage = () => {
	const { language, toggleLanguage } = useContext(LanguageContext);


	return (
		<button onClick={toggleLanguage}>
			{language === 'en' ? 'Change to Spanish' : 'Cambiar a Inglés'}
		</button>
	);
};

export default ButtonLanguage;
