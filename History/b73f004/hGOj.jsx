import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="ProfilePhoto">
      <img
        className="rounded-full w-30 h-30 mt-5 mx-auto object-cover"
        src="/images/ProfilePhoto.png"
        alt="Profile"
      />
    </div>
  );
};

export default ProfilePhoto;
