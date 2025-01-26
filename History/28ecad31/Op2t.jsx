import React from 'react';
import ProfilePhoto from './styles.module.css'

const ProfilePhoto = () => {
	return (
		<div className='ProfilePhoto'>
			<img
				className='photo'
				src="/images/ProfilePhoto.png"
				alt="Profile Photo"
			/>
		</div>
	);
};

export default ProfilePhoto;
