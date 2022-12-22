import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ActionBar from "../Components/ActionBar"


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
        <p>Login</p>
        <h2>Please enter your details</h2>
        <p>Username</p>
        <input type="text" name="username" value={username} onChange={handleInput} id="username" />
        
        <p>Password</p>
        <input type="text" name="password" value={password} onChange={handleInput} id="password" />
        <button onClick={handleLogin}>Login</button>        
        </>
    )
}
export default Login