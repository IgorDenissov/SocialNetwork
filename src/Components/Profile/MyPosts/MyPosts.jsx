import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
          <div>
              My posts
              <div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <button>Add post</button>
              </div>
              <div>
                  <div className={classes.item}>
                      <Post message = "Hi this is my family"/>
                      <Post message = " Welcome to  my family"/>

                  </div>

              </div>
          </div>
  );
}

export default MyPosts;
