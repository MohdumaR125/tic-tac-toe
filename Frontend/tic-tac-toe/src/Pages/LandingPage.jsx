import { useNavigate } from "react-router-dom"
import LoginBtn from "../Components/LoginBtn"
import RegisterBtn from "../Components/RegisterBtn"
import Styles from "../Components/Styles.module.css"

const LandingPage = () => {
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate("/login")
    }
    const goToRegister = () =>{
        navigate("/register")
    }
return (
    <>
    <div className={Styles.LandingPage}>
    <h2 className={Styles.LandingPageh2}>async</h2>
    <div className={Styles.tictactoe}>tic tac toe</div>
    </div>
    <LoginBtn handleClick={goToLogin}/><br />
    <RegisterBtn handleClick={goToRegister}/>
    </>
)
}
export default LandingPage