import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
      <div >

          <div>
              <img src="https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/87/2017/01/02131426/beach_albatros_resort_home_slide_03.jpg" alt="no image"/>
          </div>
          <div className={classes.descriptionBlock}>
              ava + description
          </div>
      </div>
  );
}
export default ProfileInfo;
