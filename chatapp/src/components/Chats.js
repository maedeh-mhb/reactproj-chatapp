import React, {useState, useContext, useEffect} from 'react';
import Navbar from './Navbar';
import styles from './Chats.module.css';
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import {ChatEngine} from 'react-chat-engine';
import AuthContext from '../contexts/AuthContextProvider'
import axios from 'axios';

const Chats = () => {

    const [loading,setLoading] =useState(true);
    const user = useContext(AuthContext)
    const history =useHistory();

    useEffect (() => {
        if (!user) {history.push("/"); 
        return; }
        axios.get ("https://api.chatengine.io/users/me", {
            headers :{
                "project-id" : "0547a121-1a3b-451d-839b-d7e4109d8bff",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then (() => {
            setLoading(false)})
        .catch (()=> {
            let formData = new FormData();
            formData.append ("email",user.email);
            formData.append ("username",user.email);
            formData.append ("secret",user.uid);
            getFile(user.photoURL)
            .then (avatar => { formData.append("avatar",avatar,avatar.name);
            axios.get ("https://api.chatengine.io/users/",formData, {
                headers : {
                    "private-key" :"0e6cadda-6327-4a08-831b-6454a45ff1d7"
                }
            })
            .then(() => {setLoading(false)})
            .catch (error => console.log(error))
        })
    })
    },[user,history])

    const getFile = async (url) =>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.png", {type:"image/jpeg"})
    }

    const LogoutHandler = async() => {
        await auth.signOut();
        history.push("/")
    }

    if (!user || loading) return "Loading..."

    return (
        <div className={ styles.container}>
           <Navbar logoutHandler={LogoutHandler}/> 
           <ChatEngine 
           height = "calc(100vh-50px)"
           projectID = " 28997d75-840e-4d2b-bf84-ad635f0644c8"
           userName ="."
           useSecret ="."
            />
        </div>
    );
};

export default Chats;