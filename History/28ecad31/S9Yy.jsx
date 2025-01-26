import React from 'react';
import styled from 'styled-components';

const Photo = styled.img
	`
  margin-top: 10px;    /* 10px margin on top */
  margin-right: 20px;  /* 20px margin on right */
  margin-bottom: 30px; /* 30px margin on bottom */
  margin-left: 40px;   /* 40px margin on left */
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
