import React from 'react';
import styles from './ProfilePhoto.module.css'

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
