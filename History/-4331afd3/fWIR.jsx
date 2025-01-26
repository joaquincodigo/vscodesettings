import React from 'react';


const Button = ({ text, icon }) => {
	return (
		<div className='row'>
			<button className='bt-primary'>
				{text}
			</button>
		</div>
	);
};

export default Button;

