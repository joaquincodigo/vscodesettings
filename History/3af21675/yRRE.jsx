import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import ProjectEntry from './ProjectEntry'


const ProjectPokemon = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const title = language === 'en' ? "Pokémon Search" : "Búsqueda Pokémon"
	const text = language === 'en' ? "Search " : "Busca y filtra entre los 151 primeros nostálgicos Pokémons para encontrar el que más te gusta!"
	const image = "an image goes here"

	return (
		<div className='ProjectJap'>
			<ProjectEntry title={title} text={text} image={image} />
		</div>
	);
};

export default ProjectPokemon;