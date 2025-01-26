import React from 'react';
import styled from 'styled-components';

const photo = styled.img`
  width: 100px;
  height: 100px;
`;

const ProfilePhoto = () => {
	return (
		<div >
			<img
				src="/images/ProfilePhoto.png"
				alt="Profile Photo"
			/>
		</div>
	);
};

export default ProfilePhoto;
