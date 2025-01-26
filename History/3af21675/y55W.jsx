import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import ProjectEntry from './ProjectEntry'


const ProjectPokemon = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const title = language === 'en' ? "Pokémon Search" : "Búsqueda Pokémon"
	const text = language === 'en' ? "POKEMON Text blablabla." : "Texto de POKEMON blablabla."
	const image = "an image goes here"

	return (
		<div className='ProjectJap'>
			<ProjectEntry title={title} text={text} image={image} />
		</div>
	);
};

export default ProjectPokemon;