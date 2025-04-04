import React from 'react';
import css from './ProfilePhoto.module.css'

const ProfilePhoto = () => {
	return (
		<div className={css.ProfilePhoto}>
			<img
				src="/images/ProfilePhoto.png"
				alt="Profile Photo"
			/>
		</div>
	);
};

export default ProfilePhoto;
