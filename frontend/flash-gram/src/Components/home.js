import React, {useEffect, useState, useContext} from "react";
import axios from "axios"
import { useInputs, fetchData } from "../util/customHooks";
import UserDisplay from "./userDisplay"
import "../css/Home.css"
import { AuthContext } from "../providers/AuthContext";
// import apiURL from "../util/apiURL"

const Home = () => {



    const [posts, setPosts ] = useState([])
    const [userInfo, setUserInfo ] = useState([])
    const { token, currentUser } = useContext(AuthContext)

    
    const getPosts = async (str="") =>{
        debugger
        try{
            let res = await axios.post("http://localhost:3000/posts/")
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
    const handleSubmit = (str)=>{getPosts(str)}

    const getUserProfile = async () =>{
        debugger
        try{
            // let user = localStorage.getItem("currentUserID")
                let user = 1
           
            let res = await axios.get(`http://localhost:3000/users/${user}`)
      
            setUserInfo(res.data.payload)
            debugger
           // set it in the state
         } catch (err){
            debugger
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
                {/* <img src={image} alt="" className="picture"/> */}
            </div>
            <div className="Banner"></div>
                <UserDisplay userInfo = {userInfo} />
            <div className="UserFeed">
                {/* <SearchBar handleSubmit={handleSubmit} />
                <FeedIndex posts={posts} /> */}
            </div>
        </div>

    )
} 

export default Home;