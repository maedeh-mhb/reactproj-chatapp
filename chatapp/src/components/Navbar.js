import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({logoutHandler}) => {
    return (
        <div className = {styles.container}>
           <span className = {styles.name}>Easy Fun Message</span>
           <span className = {styles.logout} onClick={logoutHandler}>Logout</span>
        </div>
    );
};

export default Navbar;