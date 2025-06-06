import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="ProfilePhoto w-30 h-30 mt-5 mx-auto">
      <img
        className="rounded-full object-cover"
        src="/images/ProfilePhoto.png"
        alt="Profile"
      />
    </div>
  );
};

export default ProfilePhoto;
