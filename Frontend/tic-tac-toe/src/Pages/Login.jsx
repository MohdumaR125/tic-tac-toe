import ActionBar from "../Components/ActionBar"


const Login = () => {

    return (
        <>
        <ActionBar/>
        <p>Login</p>
        <h2>Please enter your details</h2>
        <p>Username</p>
        <input type="text" name="" id="username" />
        
        <p>Password</p>
        <input type="text" name="" id="password" />
        <button>Login</button>        
        </>
    )
}
export default Login