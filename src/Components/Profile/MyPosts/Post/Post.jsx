import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" alt=""/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;
