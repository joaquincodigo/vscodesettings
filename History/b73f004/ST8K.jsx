import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="ProfilePhoto w-10 h-10 mt-5">
      <img
        className="rounded-full mx-auto object-cover"
        src="/images/ProfilePhoto.png"
        alt="Profile"
      />
    </div>
  );
};

export default ProfilePhoto;
