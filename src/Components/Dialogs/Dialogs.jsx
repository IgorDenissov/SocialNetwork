import React from 'react';
import classes from './Dialogs.module.css';
const Dialogs = (props) => {
  return (
      <div className={classes.dialogs}>
          <div className={classes.dialogsItems}>
              <div className={classes.dialog}>
                  Bob
              </div>
              <div className={classes.dialog}>
                  Anna
              </div>
              <div className={classes.dialog}>
                  Jonny
              </div>
              <div className={classes.dialog}>
                  Ron
              </div>
              <div className={classes.dialog}>
                  Helen
              </div>
              <div className={classes.dialog}>
                  Hope
              </div>
          </div>
          <div className={classes.messages}>
              <div className={classes.message}>Hi</div>
              <div className={classes.message}>How</div>
              <div className={classes.message}>Great</div>
          </div>
      </div>
  )
}
export default Dialogs;