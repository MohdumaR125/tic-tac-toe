import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ActionBar from "../Components/ActionBar"
import LoginBtn from "../Components/LoginBtn";
import Styles from "../Components/Styles.module.css"



const Login = () => {
    const navigate = useNavigate()
    const initState = {
        username: "",
        password: ""
    };
    const [data,setData] = useState(initState)
    const goBack = () => {
        navigate("/")
    }
    const handleInput = (e) =>{
        e.preventDefault();
        const {name, value } =e.target;
        setData({...data,[name]:value})
    }
    const handleLogin = ()=>{
        console.log(data);
    }
    const {username,password}=data;
    return (
        <>
        <ActionBar goBack={goBack}/>
       <div className={Styles.login}>
       <p>Login</p>
        <h3>Please enter your details</h3>
        <p>Username</p>
        <input type="text" name="username" value={username} onChange={handleInput} id="username" />
        <p>Password</p>
        <input type="text" name="password" value={password} onChange={handleInput} id="password" />
       </div>
        <LoginBtn handleClick={handleLogin}/>   
        </>
    )
}
export default Login