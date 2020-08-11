import React, {useState} from "react";
import { useInputs } from "../util/customHooks";
import { signUp } from "../util/functions"
import logo from "../assests/Flash.png";
import {Link} from "react-router-dom"
import "../css/SignUp.css"
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { apiURL } from '../util/apiURL'


const SignUp = () => {

    const firstName = useInputs("")
    const lastName = useInputs("")
    const userName = useInputs("")
    const password = useInputs("")
    const email = useInputs("")
    const [userPic, setUserPic] = useState("")
    const history = useHistory()
    const API = apiURL()

    const uploadImg = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'Flash-Gram');
        data.append('cloud_name', 'cta')
        let res = await fetch("https://api.cloudinary.com/v1_1/dbhncpu02/image/upload", {
            method: 'Post',
            body: data
            }
        )
        const file = await res.json()
        setUserPic(file.secure_url)
    }

    

    const handleSubmit = async (e) => {
        debugger
        e.preventDefault();
        try{
            await signUp(email, password)
            let res = await signUp(email, password);
            await axios.post(`${API}/users`, {
                id: res.user.id,
                firstName: firstName.value,
                lastName: lastName.value,
                userName: userName.value,
                password: password.value,
                email: email.value,
                userPic: userPic.value
            })
            debugger
            history.push("/")
        }catch(err){
            console.log(err)
        }
    }



    return(
        <div>
            <div className="signUpContainer">
            <div className="LeftSide">
            <div className="Welcome">
            <h1>Welcome to Flash-Gram!</h1>
            </div>
            </div>
             <div className="SignUpDiv">
             <div className="logo">
             <img src={logo} alt="" className="logo"/>
            </div>
             <form className="signUp" onSubmit={handleSubmit}>
                <h1> Sign Up </h1>
                <div className="input">
                <input type="text" placeholder="First Name" required {...firstName}/>
                <input type="text" placeholder="Last Name" required {...lastName}/>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="password" placeholder="Password" required {...password}/>
                <input type="text" placeholder="Email" required {...email}/>
                <h5>Upload Profile Picture</h5>
                <input type="file" onChange={uploadImg}/>
                <input type="submit" className="submit"/>
                </div>
            </form>
            <form className="user">
                <Link to="/login" className="button">Have An Account? Click Here</Link>
            </form>

             </div>
        </div>
        </div>
        
    )
}
export default SignUp;