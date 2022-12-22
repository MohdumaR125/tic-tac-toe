import { useNavigate } from "react-router-dom"
import LoginBtn from "../Components/LoginBtn"
import RegisterBtn from "../Components/RegisterBtn"

const LandingPage = () => {
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate("/login")
    }
    const goToRegister = () =>{
        navigate("register")
    }
return (
    <>
    <h2>async</h2>
    <h1>tic tac toe</h1>
    <LoginBtn handleClick={goToLogin}/>
    <RegisterBtn handleClick={goToRegister}/>
    </>
)
}
export default LandingPage