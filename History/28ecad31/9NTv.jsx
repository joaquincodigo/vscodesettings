import React from 'react';
import styled from 'styled-components';

const Photo = styled.img
	`
 	`

const ProfilePhoto = () => {
	return (
		<Photo
			className="img-fluid"
			src="/images/ProfilePhoto.png"
			alt="Profile Photo"
		/>
	);
};

export default ProfilePhoto;
