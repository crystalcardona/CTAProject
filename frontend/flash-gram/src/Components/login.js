import React, {useEffect, useState} from "react";
import { useInputs, useStateWithLocalStorage } from "../util/customHooks";
import { useHistory} from 'react-router-dom';
import logo from "../assests/Flash.png";
import axios from 'axios';
// import { login } from '../util/firebaseFunctions'
import apiURL from "../util/apiURL"
// import { AuthContext } from '../provider/AuthContext'
import '../css/LogIn.css'


const LogIn = () => {
    localStorage.clear();
    const userName = useInputs("")
    const password = useInputs("")
    
const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        let res = await axios.post("http://localhost:3001/users/login",{
                userName: userName.value,
                password: password.value
            })
            localStorage.setItem("currentUserID", res.data.user.id)
            window.location.href = "./"
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div className="loginContainer">
        <div className="LeftSide">
            <div className="Welcome">
            <h1>Welcome to Flash-Gram!</h1>
            </div>
            </div>
             <div className="login">
             <form className="logInPage" onSubmit = {handleSubmit}>
             <div className="logo">
             <img src={logo} alt="" className="logo"/>
            </div>
                <h1> Log In To Flash-Gram. </h1>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="text" placeholder="Password" type="password" required {...password}/>
                <input type="submit" className="submit"/> 
            </form>

             </div>
        </div>
    )
}

export default LogIn;