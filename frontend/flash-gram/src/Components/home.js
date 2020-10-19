import React, {useEffect, useState, useContext} from "react";
import axios from "axios"
import UserDisplay from "./userDisplay"
import "../css/Home.css"
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL"

const Home = () => {


    const API = apiURL()
    const [posts, setPosts ] = useState([])
    const [userInfo, setUserInfo ] = useState([])
    const { token, currentUser } = useContext(AuthContext)

    
    const getPosts = async () =>{
        debugger
        try{
            let res = await axios.post(`${API}/posts/`)
            setPosts(res.data.payload)
            debugger
        }catch(err){
            console.log(err)
            setPosts([])
        }
    }
    
    useEffect(()=>{
        getPosts()
    },[])

    const getUserProfile = async () =>{
        debugger
        try{
            let user = "xxx"
           
            let res = await axios.get(`${API}/users/${user}`)
      
            setUserInfo(res.data.payload)
            debugger
         } catch (err){
            console.log(err)
            setUserInfo([])

        }
     }

     useEffect(()=>{
        getUserProfile()
    },[])
     
    

    return(
        <div className="homeContainer">
         <div className="InfoLeft">
         <h1>HOME</h1>
            </div>
            <div className="Banner"></div>
                <UserDisplay userInfo = {userInfo} />
            <div className="UserFeed">
            </div>
        </div>

    )
} 

export default Home;