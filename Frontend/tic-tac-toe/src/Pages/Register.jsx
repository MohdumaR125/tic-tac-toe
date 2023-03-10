import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ActionBar from "../Components/ActionBar"
import RegisterBtn from "../Components/RegisterBtn"
import Styles from "../Components/Styles.module.css"


const Register = () => {
    const navigate = useNavigate();
    const initState = {
        name: "",
        username: "",
        email: "",
        password: ""
      };
      const [data,setData] = useState(initState)

    const goBack = () => {
        navigate("/")
    }
    const handleInput = (e) => {
        e.preventDefault();
        const {name, value } =e.target;
        setData({...data,[name]:value})
    }
    const registerUser = () => {
        console.log(data);
    }
    const {name,username,email,password}=data
    return (
        <>
        <ActionBar goBack={goBack}/>
        <div className={Styles.register}>
        <p>Create Account</p>
        <h3>Let’s get to know you better!</h3>
        <p>Your Name</p>
        <input type="text" onChange={handleInput} name="name" value={name} id="name" />
        <p>Username</p>
        <input type="text" onChange={handleInput} name="username" value={username} id="username" />
        <p>Email</p>
        <input type="text" onChange={handleInput} name="email" value={email} id="email" />
        <p>Password</p>
        <input type="text" onChange={handleInput} name="password" value={password} id="password" />
        </div>
        <RegisterBtn handleClick={registerUser}/>
        </>
    )
}
export default Register