import React from 'react';


const Button = ({ text, icon }) => {
	return (
		// <div className='button row'>
		// 	<button className='bt-primary'>
		// 		<span>{icon}</span>	{text}
		// 	</button>
		// </div>

		<button className='btn'>
			{icon && <span className='icon'>{icon}</span>}
			{text && <span className='text'>{text}</span>}
		</button>


	);
};

export default Button;

