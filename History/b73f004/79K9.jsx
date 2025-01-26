import React from 'react';

const ProfilePhoto = () => {
	return (
		<div className='row mt-5 mb-4'>
			<img
				className="
					rounded-circle
					col-4
					col-sm-4
					mx-auto
					mt-5
					"
				src="/images/ProfilePhoto.png"
				alt="Profile"
			/>
		</div>
	);
};

export default ProfilePhoto;
