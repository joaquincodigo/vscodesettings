import React, { createContext, useState, useEffect } from 'react';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
	// Get the browser language
	const browserLanguage = navigator.language || navigator.userLanguage;

	// Set the initial state to the browser language or default to 'en'
	const [language, setLanguage] = useState(browserLanguage.startsWith('es') ? 'es' : 'en');

	// Function to toggle language
	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContext;
