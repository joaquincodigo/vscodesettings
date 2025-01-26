import React from 'react';


const Button = ({ text, icon }) => {
	return (
		<div className='button row'>
			<button className='bt-primary'>
				<span>{icon}</span>	{text}
			</button>
		</div>
	);
};

export default Button;

