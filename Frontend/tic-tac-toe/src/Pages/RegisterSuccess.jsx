import ActionBar from "../Components/ActionBar"
import RegisterBtn from "../Components/RegisterBtn"

const RegisterSuccess = () => {

    return (
        <>
        <ActionBar/>
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
        <RegisterBtn disabled={disabled}/>
        </>
    )
}
export default RegisterSuccess