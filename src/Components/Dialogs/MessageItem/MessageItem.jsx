import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.message}</NavLink>
        </div>
    )
}

export default MessageItem;