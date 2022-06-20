import React from 'react';
import image from './../../assets/beach.jpg'

const ProfileInfo = () => {
  return (
      <div >
          <div>
              <img src={image} alt="Error"/>
          </div>
          <div>
              ava + description
          </div>
      </div>
  );
}

export default ProfileInfo;
