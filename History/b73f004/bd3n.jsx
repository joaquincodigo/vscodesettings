import React from 'react';

const ProfilePhoto = () => {
	return (
		<div className='container-fluid rounded-circle '>
			<img
				className="d-block mx-auto rounded-circle bg-primary"
				src="/images/ProfilePhoto.png"
				alt="Profile Photo"
			/>
		</div>
	);
};

export default ProfilePhoto;
