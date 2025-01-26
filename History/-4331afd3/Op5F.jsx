import React from 'react';


const Button = ({ text, icon }) => {
	return (

		<div className='button row'>
			<button className='bt-primary'>
				{icon && <span className='icon'>{icon}</span>}
				{text && <span className='text'>{text}</span>}
			</button>
		</div>

	);
};

export default Button;

