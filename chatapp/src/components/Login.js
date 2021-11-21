import { auth } from '../firebase';
import styles from './Login.module.css';
import React from 'react';
import google from '../assets/icons/google.svg'
import firebase from 'firebase/app'; ;


const Login = () => {
    return (
        <div className ={styles.loginPage}>
            <div className = {styles.loginCard}>
                 <h2>Welcome !</h2>
                    <div className = {styles.button}
                      onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                         <img src ={google} alt= "google" />
                         Sign In With Google
                   </div>
            </div>
        </div>
    );
};

export default Login;