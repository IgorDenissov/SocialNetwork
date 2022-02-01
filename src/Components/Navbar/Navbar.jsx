import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={classes.nav}>
          <div className = "item">
              <div className = {classes.item}>Profile</div>
          </div>
          <div className = "item">
              <div className = {classes.item}>Messages</div>
          </div>
          <div className = "item">
              <div className = {classes.item}>News</div>
          </div>
          <div className = "item">
              <div className = {classes.item}>Music</div>
          </div>
          <div className = "item">
              <div className = {classes.item}>Settings</div>
          </div>
      </nav>
  );
}

export default Navbar;
