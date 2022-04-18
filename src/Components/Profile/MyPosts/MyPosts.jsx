import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message = {p.message} likesCount ={p.likesCount}/>)
    
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');

    }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
         
    }
  return (
          <div className={classes.postsBlock}>
              <h3>My posts</h3>
              <div>
                  <div>
                      <textarea onChange={onPostChange} ref= {newPostElement}
                        value = {props.newPostText} cols="30" rows="10"/>
                  </div>
                  <div>
                      <button onClick={addPost }>Add post</button>
                  </div>
              </div>
              <div>
                  <div className={classes.item}>
                      {postsElements}
                  </div>

              </div>
          </div>
  );
}

export default MyPosts;
