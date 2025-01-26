import React from 'react';
import styled from 'styled-components';

const Photo = styled.img
	`
  margin-top: 10%;    
  margin-right: 20%;  
  margin-bottom: 30px; 
  margin-left: 40px;   
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
