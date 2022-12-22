import ActionBar from "../Components/ActionBar"
import RegisterBtn from "../Components/RegisterBtn"
import { useNavigate } from "react-router-dom"


const RegisterSuccess = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/")
    }
    return (
        <>
        <ActionBar goBack={goBack}/>
        <p>Create Account</p>
        <h2>Let’s get to know you better!</h2>
        <p>Your Name</p>
        <input type="text" name="" id="name" />
        <p>Username</p>
        <input type="text" name="" id="username" />
        <p>Email</p>
        <input type="text" name="" id="email" />
        <p>Password</p>
        <input type="text" name="" id="password" />
        <RegisterBtn />
        </>
    )
}
export default RegisterSuccess