import React from 'react';
import classes from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {


    let dialogs = props.state.dialogs.map (d  => <DialogItem name={d.name} id ={d.id}/>);
    let messages = props.state.messages.map (m => <MessageItem message={m.message}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                    {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    )
}
export default Dialogs;