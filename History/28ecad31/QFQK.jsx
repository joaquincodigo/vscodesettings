import React from 'react';
import styled from 'styled-components';

const Photo = styled.img
	`
 	`

const ProfilePhoto = () => {
	return (
		<Photo
			className="img-fluid mx-auto mt-3"
			src="/images/ProfilePhoto.png"
			alt="Profile Photo"
		/>
	);
};

export default ProfilePhoto;
