import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';


const Button = ({ text, icon }) => {

	const { theme } = useContext(ThemeContext)

	const buttonTheme = theme === 'light' ? 'btn-light' : 'btn-dark'

	return (
		<div className='row'>
			<button className={`btn btn-lg rounded-pill col-10 mx-auto mb-3 ${buttonTheme}`}>
				<div className="container mx-auto d-flex align-items-center justify-content-center">
					<img src={icon}
						alt="Contact"
						className='img-fluid me-3'
						style={{ maxWidth: '10%', height: 'auto' }}
					/>
					<span className='ibm-plex-sans-semibold me-3 fs-4'>{text}</span>
				</div>
			</button>
		</div>
	);
};

export default Button;

