import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
      <div className={classes.content}>
          <div>
              <img src="" alt=""/>
          </div>
          <div>
              ava + description
          </div>
          <div>
              My posts
              <div>
                  New post
              </div>
              <div>
                  <div>
                      post1
                  </div>
                  <div>
                      post2
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Profile;
